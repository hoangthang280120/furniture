
import { Pagination } from "@mui/material";
import CardItem from "./card";
import Filter from "./filter";
const MenuContent = () => {
    const itemData = [
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
        {
            url: "https://kika.vn/wp-content/uploads/2022/11/sofa-vang-SF219-2-300x300.jpg",
            desc: "Ghế sofa văng hiện đại Minotti bọc da Hàn – SF219",
            price:15600000,
            promotionPrice:14900000
        },
    ]
    return (
        <div className="menu">
            <h3 className="text-start">Tất cả sản phẩm</h3>
            <Filter />
            <div className="grid grid-cols-4 gap-3 mt-5 card-group">
                {itemData.map((element,index)=>{
                    return (<CardItem key={index} imgUrl={element.url} description={element.desc} price={element.price} promotionPrice={element.promotionPrice} />)
                })}

            </div>
            <Pagination className="mt-5" count={10} variant="outlined" shape="rounded" />
        </div>
    )
}
export default MenuContent