import Document,{Html,Head,Main,NextScript} from "next/document"

class MyDocument extends Document {

    render(){
        return(
            <Html lang="fr">
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                    {/* <div className="modal">Hello world</div> */}
                </body>
            </Html>
        )
    }
}

export default MyDocument