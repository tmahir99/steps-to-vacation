import React from 'react';

import {Text, Container, Content, Title, Form, Item, Input, Button, Footer} from "native-base";

export default function Login({ navigation }) {
    let client = {
        username : '',
        password : '',
        Name : '',
        lastName : '',
        height : '',
        weight : '',
        adress: {
            street : '',
            country : '',
            city : ''
        }
    };

    return <Container>
        <Content>
            <Title>
                Steps to vacation
            </Title>

            <Form>
                <Item>
                    <Input value={client.username} placeholder="Username" />
                </Item>
                <Item last>
                    <Input value={client.password} placeholder="Password" />
                </Item>
                <Item >
                    <Input value={client.name} placeholder="Name" />
                </Item>
                <Item >
                    <Input value={client.lastName} placeholder="Last Name" />
                </Item>
                <Item >
                    <Input value={client.height} placeholder="Height" />
                </Item>
                <Item >
                    <Input value={client.weight} placeholder="Weight" />
                </Item>
                <Item >
                    <Input value={client.street} placeholder="Street" />
                </Item>
                <Item >
                    <Input value={client.city} placeholder="City" />
                </Item>
                <Item >
                    <Input value={client.country} placeholder="Country" />
                </Item>

                <Button style={{ width: '100%' }} onPress={() => navigation.navigate('HomeDrawer', { screen: 'Home' })}>
                    <Text>
                        Sign in
                    </Text>
                </Button>
            </Form>
        </Content>
        <Footer>
            <Text style={{ color: 'white'}}>
                @Mahir
            </Text>
        </Footer>
    </Container>
}
