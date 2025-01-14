import React from "react";
import * as Styled from "./style";
import { DefaultUser } from "../../../assets/imgs";
import { Text } from "../../text";

export function DownloadProductCard({
    name = "(nenhum)",
    email = "(nenhum)",
    company = "(nenhum)",
    phone_number = "(nenhum)",
    product_id = "(nenhum)",
    product_name = "(nenhum)",
    created_at = "2025-01-13 18:32:14.486",
    isBorderActive = false,
}) {
    return (
        <Styled.Card isBorderActive={isBorderActive}>

                <Styled.Gap>
                    <Styled.ImgDriver src={DefaultUser} />
                    <Text text={name} size="M" />
                </Styled.Gap>

            <div>
                <Styled.Flex>
                    <Styled.Bold>Email:</Styled.Bold>
                    <Styled.Text>{email}</Styled.Text>
                </Styled.Flex>

                <Styled.Flex>
                    <Styled.Bold>Empresa:</Styled.Bold>
                    <Styled.Text>{company}</Styled.Text>
                </Styled.Flex>
                <Styled.Flex>
                    <Styled.Bold>Telefone:</Styled.Bold>
                    <Styled.Text>{phone_number}</Styled.Text>
                </Styled.Flex>
                <Styled.Flex>
                    <Styled.Bold>Id produto:</Styled.Bold>
                    <Styled.Text>{product_id}</Styled.Text>
                </Styled.Flex>
                <Styled.Flex>
                    <Styled.Bold>Nome produto:</Styled.Bold>
                    <Styled.Text>{product_name}</Styled.Text>
                </Styled.Flex>
                <Styled.Flex>
                    <Styled.Bold>Data:</Styled.Bold>
                    <Styled.Text>{new Date(created_at).toLocaleString()}</Styled.Text>
                </Styled.Flex>
            </div>
        </Styled.Card>
    );
}
