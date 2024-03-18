import { Button } from "@mui/material"

const CardItem = (props) => {
    return (
        <div className="card-item">
            <div className="relative card-img-div flex justify-center">
            <img className="card-img" src={props.imgUrl} alt="item" />
            <Button className="add-cart">
                Add to cart
            </Button>
            </div>
            <div className="p-3">
                <a href="/" className="card-description">
                    {props.description}
                </a>
                <div className="flex justify-between mt-3">
                    <div>
                        <p className="promotion-price">
                            {new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' }).format(props.promotionPrice)}
                        </p>
                        <p className="price">
                            {new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' }).format(props.price)}
                        </p>
                    </div>
                    <div className="w-1/4 percent-discount flex items-center justify-center">
                       - {(( props.price-props.promotionPrice)/props.price*100).toFixed(0)}%
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardItem