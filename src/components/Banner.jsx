import BannerImg from "../assets/banner.jpg";

export default function Banner(){
    return(
        <div className="container-fluid mt-5">
            <div className="row">
        <div className="col-md-12 p-5 bannercontainer">
            <div className="row resheader">
                <div className="col-md-6 p-5 mt-5">
                    <div className="row pt-5">
                    <h3>Best Orthopedic Doctor in Hyderabad for Joint Replacement & Arthroscopy</h3>
                    </div>
                    <button className="btn btn-default mt-3 text-light conbtn" style={{background:'rgb(62, 147, 193)'}}><a href="/ContactUS" style={{textDecoration:'none', color:'inherit'}}>CONTACT US</a></button>
                </div>
                <div className="col-md-6 bannerContent" >
                    <div className="row">
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}