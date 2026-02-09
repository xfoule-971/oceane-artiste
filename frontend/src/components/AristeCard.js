import Movie from "../assets/videos/oceane-video.mp4";

const ArtisteCard = () => {
    return (
        <div className="card card-survol shadow-lg border-5 text-center" style={{ width: '56rem' }}>
            <video className="card-img-top" src={Movie}  controls autoPlay muted loop></video>
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare arcu arcu, nec laoreet sem dapibus vel. 
                    Proin ultricies scelerisque pharetra. Pellentesque cursus tristique libero vitae congue. 
                    Curabitur viverra fermentum lacus eu pharetra. Quisque efficitur pretium mi, sed sagittis felis molestie vel. 
                    Sed venenatis nisl vitae purus ullamcorper, et euismod est porta. Phasellus pharetra odio in facilisis tincidunt. 
                    Phasellus eget purus sit amet arcu sodales iaculis. Pellentesque rhoncus, 
                    nulla vel tempor eleifend, felis neque aliquam enim, in sagittis leo leo id urna. 
                    Donec commodo, mauris id laoreet commodo, ex quam aliquam est, nec maximus risus est ac odio. Proin vel est ex.
                </p>
                <p>
                    Nam sit amet augue diam. Vestibulum imperdiet vestibulum velit vel suscipit. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Vestibulum ac erat accumsan, ullamcorper dolor sed, euismod leo. 
                    Suspendisse bibendum dictum nisl rutrum semper. Donec pretium egestas sem, eu efficitur sapien imperdiet id. 
                    Sed ornare sed libero eget lacinia. Duis rhoncus risus quis condimentum pulvinar. 
                    Cras turpis ipsum, pretium ac dignissim sit amet, tincidunt eget libero. 
                    Suspendisse a mattis purus, ut suscipit lectus. Maecenas sed massa magna. 
                    Proin ut nunc efficitur neque blandit tempor vitae nec massa.
                </p>
            </div>
        </div>
    );
};
export default ArtisteCard;