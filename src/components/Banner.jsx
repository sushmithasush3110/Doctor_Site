import BannerImg from "../assets/banner.jpg";

export default function Banner(){
    return(
        <div className="col-12 bannercontainer">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8 bannerContent" >
                    <div className="row">
                        <p>Hello, I'm <span className="bannerh4span">Dr.Ajay Kumar Parchuri</span> Orthopedic Surgeon
                        I am a Orthopedic Excellence: Expert Care for Your Mobility and Well-being</p>
                    </div>
                </div>
            </div>
        </div>
    )
}