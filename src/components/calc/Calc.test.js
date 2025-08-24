import { render, screen, fireEvent } from "@testing-library/react";
import Calc from "./Calc";

test("realiza soma corretamente", () => {
  render(<Calc />);

  // Selecionar os inputs
  const inputs = screen.getAllByDisplayValue("0");
  const input1 = inputs[0];
  const input2 = inputs[1];

  // Digitar valores
  fireEvent.change(input1, { target: { value: "2" } });
  fireEvent.change(input2, { target: { value: "3" } });

  // Selecionar o operador "+"
  fireEvent.click(screen.getByRole("button", { name: "+" }));

  // Clicar no botão "="
  fireEvent.click(screen.getByRole("button", { name: "=" }));

  // Verificar se o resultado apareceu
  expect(screen.getByText("5")).toBeInTheDocument();
});

test("divisão por 0", () => {
    render(<Calc />);
  
    // Selecionar os inputs
    const inputs = screen.getAllByDisplayValue("0");
    const input1 = inputs[0];
    const input2 = inputs[1];
  
    // Digitar valores
    fireEvent.change(input1, { target: { value: "2" } });
    fireEvent.change(input2, { target: { value: "0" } });
  
    // Selecionar o operador "+"
    fireEvent.click(screen.getByRole("button", { name: "/" }));
  
    // Clicar no botão "="
    fireEvent.click(screen.getByRole("button", { name: "=" }));
  
    // Verificar se o resultado apareceu
    expect(screen.getByText("Dividing by zero")).toBeInTheDocument();
  });

  test("NaN", () => {
    render(<Calc />);
  
    // Selecionar os inputs
    const inputs = screen.getAllByDisplayValue("0");
    const input1 = inputs[0];
    const input2 = inputs[1];
  
    // Digitar valores
    fireEvent.change(input1, { target: { value: "2" } });
    fireEvent.change(input2, { target: { value: "" } });
  
    // Selecionar o operador "+"
    fireEvent.click(screen.getByRole("button", { name: "+" }));
  
    // Clicar no botão "="
    fireEvent.click(screen.getByRole("button", { name: "=" }));
  
    // Verificar se o resultado apareceu
    expect(screen.getByText("Not a number")).toBeInTheDocument();
  });
