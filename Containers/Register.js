import React from 'react';

import {Text, Container, Content, Title, Form, Item, Input, Button, Footer} from "native-base";

export default function Login({ navigation }) {
    return <Container>
        <Content>
            <Title>
                Steps to vacation
            </Title>

            <Form>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item last>
                    <Input placeholder="Password" />
                </Item>

                <Button style={{ width: '100%' }} onPress={() => navigation.navigate('HomeDrawer', { screen: 'Home' })}>
                    <Text>
                        Login
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
