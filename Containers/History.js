import React, { useState, useEffect } from 'react';

import moment from "moment";

import {Container, Text, List, ListItem, Body } from "native-base";

import { getDatesForUser } from "../Requests";

export default function History() {
    const [dates, setDates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await getDatesForUser('mahir');

                setDates(response.data);
            } catch {
                console.log('ERROR');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return <Container>
        <List>
            {
                loading
                ?
                    <Text>
                        Loading...
                    </Text>
                    :
                dates.map(date => <ListItem>
                    <Body>
                        <Text>
                            Date: {moment(date.date).format('DD.MM')}
                        </Text>
                        <Text note>
                            steps: {date.steps}
                        </Text>
                    </Body>
                </ListItem>)
            }
        </List>
    </Container>
}
