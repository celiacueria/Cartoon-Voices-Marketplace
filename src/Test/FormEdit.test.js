import axios from "axios";
import FormEdit from "../Components/FormEdit/FormEdit";

test("Given I start page, When T call handleUpdate(), Then set the const(name, category, email, and price", () => {

    //Given
    const set = new FormEdit();

    //When
    set.handleUpdate();

    //then
    expect(set.nombre).not.toBe("");
    expect(set.categoria).not.toBe("");
    expect(set.email).not.toBe("");
    expect(set.precio).not.toBe("")


});