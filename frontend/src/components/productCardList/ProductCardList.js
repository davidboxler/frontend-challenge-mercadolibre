import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductCardList.scss';
import logoEnvio from '../../assets/ic_shipping.png'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export const ProductCard = (props) => {

    const navigate = useNavigate()
    const sendData = () => {
        navigate(`/items/${props.id}`)
    }

    console.log(props)

    return (
        <>
            <Card className="card-product">
                <Grid
                    container
                    className={'container-card'}
                    onClick={() => sendData()}
                >
                    <Grid item xs={2}>
                        <img alt={'imagen de producto'} className={'img-product'} src={props.data.picture} />
                    </Grid>
                    <Grid item xs={10}>
                        <div className={'container-info-product'}>
                            <div className={'container-price'}>
                                <p className={'price-text'}>$ {props?.data?.price?.amount}</p>
                                {props.data.free_shippin ? (
                                    <img alt={'logo envio'} src={logoEnvio} className={'icon-envio'} />
                                ) : null}
                            </div>
                            <div>
                                <p>{props.data.title}</p>
                                <p>{props.data.condition}</p>
                            </div>
                        </div>
                        <div className={'lugar-product'}>
                            <p>{props.data.location}</p>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default ProductCard
