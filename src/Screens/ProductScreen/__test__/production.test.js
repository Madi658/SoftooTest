import { fireEvent, render } from "@testing-library/react-native";
import { ProductsScreen } from "../ProductScreen";
const mockDataTodos = [
  {
    id: "id-1",
    name: "Todo-1",
  },
  {
    id: "id-2",
    name: "Todo-2",
  },
  {
    id: "id-3",
    name: "Todo-3",
  },
];
describe("Product Screen", () => {
  it("Testing FlatList", () => {
    test("Error component should be render when error is true", () => {
      const componentTree = render(<ListItem todos={mockDataTodos} />);
      expect(componentTree.getAllByType(FlatList).length).toBe(1);
      expect(componentTree.getAllByType(Item).length).toBe(
        mockDataTodos.length
      );
    });
  });
  it("should go to the Add to CartScreen", () => {
    const navigation = { navigate: () => {} };
    const path = render(<ProductsScreen navigation={navigation} />);
    const Cartutton = path.getByTestId("cartButton");
    fireEvent.press(Cartutton);
    expect(navigation.navigate).toHaveBeenCalled("Bucket");
  });
  it("Should be increase and decrease value", () => {
    const path = render(<ProductsScreen />);
    const Increment = path.getByTestId("Increment");
    const decrement = path.getByTestId("decrement");
    expect(Increment.simulate("onPress")).not.toEqual(0);
    expect(decrement.simulate("onPress")).toBeLessThan(Increment);
  });
});

