import React, { useEffect } from 'react'
import { useState } from 'react'
import { Loader, Cards, FormField } from '../Components'
const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return (
            data.map((post) => <Cards key={post._id} {...post} />)
        );
    }

    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    );
};
const Home = () => {
    const [loading, setloading] = useState(false)
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchedResults, setSearchedResults] = useState(null);
    const [searchtimeout,setsearchtimeout] = useState(null)
    const fetchPosts = async () => {
        setloading(true);
    
        try {
          const response = await fetch('http://localhost:3000/api/v1/post', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const result = await response.json();
            setAllPosts(result.data.reverse());
            console.log(result)
          }
        } catch (err) {
          alert(err);
        } finally {
          setloading(false);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);

      const handlesearchchange=(e)=>{
          setSearchText(e.target.value)
          setsearchtimeout(
        setTimeout(() => {
            const searchresult = allPosts.filter((item)=>
                item.name.toLowerCase().includes(searchText.toLowerCase())||item.prompt.toLowerCase().includes(searchText.toLowerCase())
            )
            setSearchedResults(searchedResults)
        },500 ))
      }
    return (
        <div>
            <section className="max-w-7xl mx-auto">
                <div>
                    <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
                    <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by Artificial Intellegence</p>
                </div>

                <div className="mt-16">
                    <FormField
                
                    type="text"
                    name="text"
                    placeholder="search posts"
                    value={searchText}
                    handleChange={handlesearchchange}
                    />
                </div>

                <div className="mt-10">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {searchText && (
                                <h2 className="font-medium text-[#666e75] text-xl mb-3">
                                    Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
                                </h2>
                            )}
                            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                                {searchText ? (
                                    <RenderCards
                                        data={setSearchedResults}
                                        title="No Search Results Found"
                                    />
                                ) : (
                                    <RenderCards
                                        data={allPosts}
                                        title="No Posts Yet"
                                    />
                                )}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Home
