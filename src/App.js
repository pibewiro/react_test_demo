import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./App.css";
import Header from "./Header";
import Headline from "./Headline";
import SharedButton from "./Button";
import ListItem from "./ListItem";
import { Component } from "react";

const cars = [
  {
    make: "honda",
    model: "accord",
    year: "2004",
    price: 5000,
    sold: true,
  },
];

const initialState = {
  hideBtn: false,
};
class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);

    this.state = {
      ...initialState,
    };
  }

  fetch() {
    this.props.fetchPosts();
    this.updateBtn();
  }

  updateBtn() {
    this.setState({ hideBtn: true });
  }

  returnValue(number) {
    return number + 1;
  }

  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App" data-test="App-comp">
        <Header />
        <Headline title="Cars" headline="Car listing everyday" cars={cars} />
        {!this.state.hideBtn && <SharedButton {...configButton} />}

        {this.props.posts.length > 0 && (
          <div>
            {this.props.posts.map((posts, index) => (
              <ListItem title={posts.title} desc={posts.desc} key={index} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPosts })(App);
