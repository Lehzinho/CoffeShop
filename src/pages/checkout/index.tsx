import * as S from "./styles";
import { NewInformationForm } from "./components/NewInformationForm";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { NewPaymentForm } from "./components/newPaymentForm";
import { NewCheckoutForm } from "./components/newCheckoutForm";

const inputArray = [
  { placeHolder: "CEP", gridColumn: 4, optional: false },
  { placeHolder: "Rua", gridColumn: 12, optional: false },
  { placeHolder: "Número", gridColumn: 4, optional: false },
  { placeHolder: "Complemento", gridColumn: 8, optional: true },
  { placeHolder: "Bairro", gridColumn: 4, optional: false },
  { placeHolder: "Cidade", gridColumn: 7, optional: false },
  { placeHolder: "UF", gridColumn: 1, optional: false },
];

const formCheckoutValidationSchema = z.object({
  CEP: z.string().min(1, "Cep Obrigatorio").max(9, "cep invalido"),
  Rua: z.string().min(1, "Rua Obrigatorio"),
  Número: z.string(),
  Complemento: z.string(),
  Bairro: z.string().min(1, "Bairro Obrigatorio"),
  Cidade: z.string().min(1, "Cidade Obrigatorio"),
  UF: z.string().min(2, "UF Obrigatorio"),
  pagamento: z.string(),
});

export type NewChckoutFromData = z.infer<typeof formCheckoutValidationSchema>;

function Checkout() {
  const newCheckoutForm = useForm<NewChckoutFromData>({
    resolver: zodResolver(formCheckoutValidationSchema),
    defaultValues: {
      Bairro: "",
      CEP: "",
      Cidade: "",
      Complemento: "",
      Número: "",
      Rua: "",
      UF: "",
      pagamento: "credito",
    },
  });

  const { handleSubmit } = newCheckoutForm;

  const handleSubmitCheckout = (e: NewChckoutFromData) => {
    console.log(e);

    // reset();
  };

  return (
    <S.Checkout>
      <form onSubmit={handleSubmit(handleSubmitCheckout)}>
        <FormProvider {...newCheckoutForm}>
          <NewInformationForm inputArray={inputArray} />
          <NewPaymentForm />
          <NewCheckoutForm />
        </FormProvider>
      </form>
    </S.Checkout>
  );
}

export default Checkout;
