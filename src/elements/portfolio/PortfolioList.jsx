import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-1',
        // category: 'Development',
        title: 'Elegant Staircase Railing'
    },
    {
        image: 'image-2',
        // category: 'Development',
        title: 'Fancy Gate Posts'
    },
    {
        image: 'image-3',
        // category: 'Development',
        title: 'Structural Bridge and Hand Rails'
    },
    {
        image: 'image-4',
        // category: 'Development',
        title: 'Hand Rails for Stairs'
    },
    {
        image: 'image-5',
        // category: 'Development',
        title: 'Gate and Fence Ornaments'
    },
    {
        image: 'image-6',
        // category: 'Development',
        title: 'Hand Railing for Balconies'
    }
]

class PortfolioList extends Component {
    render() {
        const { column, styevariation } = this.props;
        const list = PortfolioListContent.slice(0, this.props.item);
        return (
            <React.Fragment>
                {list.map((value, index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4>{value.title}</h4>
                                    {/* <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div> */}
                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}

            </React.Fragment>
        )
    }
}

export default PortfolioList;