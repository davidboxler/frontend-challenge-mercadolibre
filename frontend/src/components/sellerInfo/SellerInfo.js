import React from 'react';
import './SellerInfo.scss';
import { BiMessage } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaMedal, FaCheckCircle } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

export const SellerInfo = ({address}) => {
    return (
        <div className="seller-info mt-15px">
            <h3>Información sobre el vendedor</h3>

            <div className="location-and-mercadoLider">
                <GoLocation className="location-and-mercadoLider-icon" />

                <div className="fs-14px">
                    <p className="fs-16px">Ubicación</p>
                    <p className="text-grey">{address?.city?.name}, {address?.state?.name} </p>
                </div>
            </div>

            <div className="location-and-mercadoLider">
                <FaMedal className="location-and-mercadoLider-icon text-green" />

                <div className="fs-14px">
                    <p className="fs-16px text-green">MercadoLíder Platinum</p>
                    <p className="text-grey">¡Es uno de los mejores del sitio!</p>
                </div>
            </div>

            <ul className="reputation-bar">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className="reputation">
                <div className="rep-section">
                    <p className="fs-24px">5504</p>
                    <p className="fs-12px mt-8px">Ventas en los últimos 60 días</p>
                </div>

                <div className="rep-section">
                    <div>
                        <BiMessage className="rep-main-icon" />
                        <FaCheckCircle className="rep-check-icon" />
                    </div>

                    <p className="fs-12px mt-8px">Brinda buena atención</p>
                </div>

                <div className="rep-section">
                    <div>
                        <MdTimer className="rep-main-icon" />
                        <FaCheckCircle className="rep-check-icon" />
                    </div>

                    <p className="fs-12px mt-8px">Despacha sus productos a tiempo</p>
                </div>
            </div>

            <p className="more-info d-inline-block">Ver más datos de este vendedor</p>
        </div>
    )
}

export default SellerInfo;