import  Container  from "./Container";


const Contact = () => {
    return (
        <Container id="contact"
                className="py-10 lg:py-32 flex flex-col gap-4 items-center justify-center">
            <p className="text-lg text-darkText font-semibold tracking-wide">
                What's Next?
            </p>
            <h2 className="text-5xl font-semibold">Get In Touch</h2>
            <p className="max-w-xl mx-auto text-darkText text-center">
              Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <a href="mailto:jibonroy9320@gmail.com">
                <p className="w-40 h-12 border border-designColor font-semibold mt-7 rounded-md text-sm text-designColor hover:text-darkText duration-300 flex items-center justify-center"> 
                    Say Hello 
                </p>
            </a>
        </Container>
    );
};

export default Contact;