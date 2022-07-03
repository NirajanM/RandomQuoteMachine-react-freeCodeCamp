class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quote:[],
            index:0,
            tweetLink:''
        };
        this.pickQuote=this.pickQuote.bind(this);
    }
    pickQuote(){
            let randomIndex = Math.floor(Math.random()*QuoteBank.length);
            let randomQuote = QuoteBank[randomIndex];
            let indentTweet = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=" + encodeURIComponent('"' + randomQuote.text +  '"' + randomQuote.author)

            this.setState({
                quote:randomQuote,
                index:randomIndex,
                tweetLink:indentTweet
            })
    }

    render(){
        window.onload=()=>{
            this.pickQuote()
        }
        return(
            <>
                <div className="myStyle">
                <div id="quote-box" className="fix-pixel list-group">
                    <div className="list-group-item">
                    <div id="text">{this.state.quote.text}</div>
                    <div id="author">-{this.state.quote.author||"unknown author"}</div>
                    </div>
                    <div className="list-group-item d-flex justify-content-between">
                    <button id="new-quote" className="btn btn-primary" onClick={this.pickQuote}>New Quote</button>
                    <a href={this.state.tweetLink}id="tweet-quote" className="btn btn-primary" target="_blank">Tweet This</a>
                    </div>
                    <p className="text-center">by Nirajan</p>
                </div>
                </div>
            </>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));