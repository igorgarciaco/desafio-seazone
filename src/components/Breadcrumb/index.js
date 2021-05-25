import React from 'react';
import { Link} from 'gatsby';

import './breadcrumb.scss'

import ArrowIcon from "../../images/icons/right-arrow.svg"

const BreadcrumbComponent = (props) => {
  return (
    <div className="breadcrumb-wrapper">
        <Link to="/propriedades">Imóveis</Link>
        <img src={ArrowIcon} alt="" width="12px" />
        <Link to="/propriedades/details">Jurerê Internacional</Link>
    </div>
  );
};

export default BreadcrumbComponent
