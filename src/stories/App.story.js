import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { MemoryRouter } from 'react-router';

import App from '../App';

/* We could build out (or share) the mocked provider as for the InboxScreen.story */
function MockedProvider() {
    /*  ...  */
}

storiesOf('App', module)
    .addDecorator(story => (
        <MockedProvider>
            <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
        </MockedProvider>
    ))
    .add('homepage', () => {
        // mockedTasks.inbox = inboxTasks;
        // mockedTasks.pinned = pinnedTasks;
        return <App/>;
    });
