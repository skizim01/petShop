import style from './style.module.css'

const Filter = () => {
    const sortBy = ['Default', "Popularity",
        'Average rating',
        "Newness",
        'Price: Low to High',
        'Price: High to Low']


    const price = ['0.00 - 1000', "1000.00 - 3000.00", '3000.00+']
    const colors = ["black", 'blue', "gray", 'green', "red", 'white']
    const tags = ["Fashion" ,"Lifestyle", "Denim", "Streetstyle", "Craft"]
    return (
            <div className={style.container}>
                <div className={style.sortBy}>
                    SortBy
                    {sortBy.map(e => {
                        return(<div className={style.listItem}>{e}</div>)
                    })}
                </div>
                <div className={style.price}>
                    Prise
                    {price.map(e => {
                        return(<div className={style.listItem}>{e}</div>)
                    })}
                </div>
                <div className={style.color}>
                    Color
                    {colors.map(e => {
                        return(
                            <div style={{display:"flex", alignItems:'center', gap:"10px"}}>
                                <div style={{height:"15px", width:"15px", borderRadius:"50%", backgroundColor:e}}></div><div className={style.listItem}>{e}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={style.tags}>
                    Tags
                    <div className={style.tagsContainer}>
                        {tags.map(e => {
                            return(<div className={style.tagItem}>{e}</div>)
                        })}
                    </div>
                </div>
            </div>
        )
}

export default Filter