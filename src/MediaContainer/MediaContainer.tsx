import { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../Context/General.context";
import { gql, useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import './MediaContainer.css';
import { ResponseApi } from "../Interfaces/response.interface";
import { Character } from "../Interfaces/character.interface";
import { MediaCard } from "../Card/MediaCard";
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';



export const MediaContainer = () => {
    const { page, status, species, characters, updateCharacters, updatePage } = useContext(GeneralContext);
    const [scrollPos, setScrollPos] = useState<number>(0);


    const query = gql`
query {
  characters(page: ${page}, filter: { status: "${status}", species: "${species}" }) {
    results {
      id
      name
      status
      species
      image
      gender
      origin {
        name
      }
    }
    info {
      next
    }
  }
}
`;
    const { loading, error, data, fetchMore, refetch } = useQuery<ResponseApi>(query);

    useEffect(() => {
        if (data) {
            
            const newCharacters = data.characters.results;
            let res = [...characters, ...newCharacters]
            updateCharacters(res);
            window.scrollTo(0, scrollPos);
        }
    }, [data]);

    const fetchMoreData = () => {
        setScrollPos(window.scrollY);
        if (data?.characters.info.next) {
            updatePage(page + 1);
            fetchMore({
                variables: { page: page + 1, status, species },
            });
        }
    };

    if (loading && !data) return <div className="loadingCont"><p className="loadingText">Loading...</p></div>;
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
                <button onClick={() => refetch()}>Retry</button>
            </div>
        );
    }
    const backToTop = () => {

        window.scrollTo(0, 0);
        setScrollPos(0);
    }


    return (
        <div className="container">
            

            <InfiniteScroll
                dataLength={characters.length}
                next={fetchMoreData}
                hasMore={data?.characters.info.next !== null}
                loader={<h4 className="loadingText">Loading...</h4>}
                endMessage={<p>No more characters available.</p>}
                scrollThreshold={1}
            >
                <main className="listContainer" >
                    {characters.map((item: Character) => (
                        <MediaCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            origin={item.origin}
                            gender={item.gender}
                            status={item.status}
                            species={item.species}
                            image={item.image}
                        />
                    ))}
                </main>
            </InfiniteScroll>

            <button onClick={backToTop} className="top"><PanToolAltIcon /></button>
        </div>
    );
};
