import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../src/components/NewsCard';

const CategoryNews = () => {


    const {id} = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {

        if (id =="0") {

            setCategoryNews(data);
            return;
        }
        else if (id =="1") {
            const filteredNews= data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        // ekhane third equal dile ki hoto

        else {
            const filteredNews= data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
        }
        
    }, [data, id]);
    
    return (
        <div>
            Total {categoryNews.length} news found 

            <div className='grid grid-cols-1 gsp-5'>
                {
                    categoryNews.map((news) => (
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }



            </div>





        </div>
    );
};

export default CategoryNews;