import { types } from "../../actions/types";
import PostReducer from "./reducer";

describe("post reducer", () => {
  it("should return default state", () => {
    const newState = PostReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("should new state if recieving type", () => {
    const posts = [{ title: 1 }, { title: 2 }, { title: 3 }];
    const newState = PostReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
