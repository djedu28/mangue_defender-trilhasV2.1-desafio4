import { FormProvider, useForm, useFormContext } from "react-hook-form";

import {
    StyledForm,
    StyledBoxLaranja,
    StyledInputContainer,
    FormHelperText,
} from "./styled";

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BtnVerde } from "../BtnJogar";
import BtnGooglePlay from "../BtnGooglePlay";
// import api from "src/services/api";
import { useState } from "react";


const schema = z.object({
    name: z.string().min(3, { message: "Insira o nome completo" })
        .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Nome deve conter apenas letras e espaço')
        .refine((value) => /^[a-zA-Z]+\s+[a-zA-Z ]+$/.test(value ?? ""), 'Por favor, insira o nome e o sobrenome')
    ,
    username: z.string().min(4, { message: "Pelo menos 4 caracteres" }).refine((value) => /^[a-zA-Z][a-zA-Z0-9]*$/.test(value ?? ""), 'Somente letras e números, começando por uma letra'),
    email: z.string().email({ message: "Digite um email valido" }),
    password: z
        .string()
        .min(8, { message: "Pelo menos 8 caracteres" })
        .max(20, { message: "Máximo de 20 caracteres" }),
    birthday: z.coerce
        .date({ message: "Insira uma data valida" })
    // .max(new Date().toDateString(), { message: "Insira uma data valida"} ),
});


export function InputContainer({ type, label, name, required, pattern }) {
    const { register, formState: { errors } } = useFormContext();

    const error = errors[name]
    return (
        <div style={{ width: "100%" }}>
            <StyledInputContainer style={{ outline: error ? '#db0026 solid 3px' : '' }}>
                {type == "date" && <label>{label}</label>}
                <input type={type} placeholder={label} {...register(name, { required, pattern })} />
                {type == "checkbox" && <label>{label}</label>}
            </StyledInputContainer>
            {error && <FormHelperText>{error.message || "preencha corretamente"} </FormHelperText>}
        </div>
    )
}

function Form({
    onSubmit
}) {

    const methods = useForm({
        resolver: zodResolver(schema)
    });
    const { handleSubmit } = methods;

    const { formState: { errors } } = useForm();
    console.log(errors);

    return (
        <FormProvider {...methods}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <h2>INSCREVA-SE</h2>

                <div className="container-input-form">
                    <InputContainer type="text" label="Nome completo" name="name" required={true} />
                    <InputContainer type="text" label="Nome de usuário" name="username" required={true} pattern={/[A-Za-z][A-Za-z0-9]*/i} />
                    <InputContainer type="text" label="E-mail" name="email" required={true} pattern={/^\S+@\S+$/i} />
                    <InputContainer type="date" label="Aniversario" name="birthday" required={true} />
                    <InputContainer type="password" label="Senha" name="password" required={true} />

                    <StyledInputContainer style={{ padding: "2rem 1rem" }}>
                        <p>
                            Ao enviar os dados você declara que leu e concorda com os <a href="#termos">termos de uso</a> e a <a href="#politica">politica de privacidade</a>
                        </p>
                    </StyledInputContainer>
                </div>
                <p>*Atenção: todas as informações acima são obrigatórias.</p>
                <div className="form-actions">
                    <button type="reset" >Canelar</button>
                    <button type="submit" >Enviar</button>
                </div>
            </StyledForm>
        </FormProvider>
    );
}


export function FormRegister() {
    const [isLoading, setIsLoading] = useState(false);
    const [modalSuccessData, setSuccessData] = useState(null);
    const onSuccess = (data) => { setIsLoading(false); setSuccessData(data); }
    const onSubmit = data => {
        if (isLoading){
            return;
        }
        setIsLoading(true)
        console.log(data)

        // api.post("http://api-mangue-defender.djedu28.com/api/registro").then(({data})=>onSuccess(data)).catch(console.error)

        setTimeout(() => onSuccess(data), 2000)
    };

    return <> {isLoading && <p>Carregando...</p> }
        {
            modalSuccessData 
                ? <FormSuccess data={modalSuccessData}/>
                : <Form onSubmit={onSubmit} />
        }
    </>
        
    
}

function FormSuccess({data}) {
    console.log({data})
    return (
        <StyledBoxLaranja>
            {data?.name && <h2>{data.name.split(" ").slice(0,2).join(" ")}!</h2>}
            <h2>JOGUE AGORA</h2>

            <div className="container-text-success">
                Inscrição realizada com sucesso!

                Clique abaixo para baixar o jogo no seu android
            </div>
            <BtnGooglePlay/>
            <div className="container-text-success">
                Entre para o a comunidade no  whatsapp, e compartilhe a sua experiencia com o jogo
            </div>
            <div className="form-actions">
                <BtnVerde href="https://play.google.com/store/search?q=mangue%20defender&c=apps" text="JOGUE AGORA" />
            </div>
        </StyledBoxLaranja >
    )   
}