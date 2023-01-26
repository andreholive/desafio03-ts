import { Text } from "@chakra-ui/react"
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext";

const ContaInfo = () => { 

    const { userData } = useContext(AppContext);

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta:
            </Text>
            <Text fontSize='xl' fontWeight='bold'>
                Nome: {userData.name}
            </Text>
            <Text fontSize='xl' fontWeight='bold'>
                email: {userData.email}
            </Text>
            <Link to={`/conta/${userData.id}`}>
                <Text fontSize='xl'>
                    acessar a conta
                </Text>
            </Link>
        </>
    )
}

export default ContaInfo
