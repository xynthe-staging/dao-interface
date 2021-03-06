//import Progress from './progress.js'
import Client from './client.js'
import { 
	ApolloProvider, 
	useQuery as _useQuery, 
	gql as _gql 
} from '@apollo/client';
import { useNetwork } from '@libs/web3'

export const GraphProvider = ({ children }) => {
	let { graphUri } = useNetwork();

	const client = Client.ApolloWrapper(graphUri); 

	return <ApolloProvider client={client}>
		{children}
	</ApolloProvider>
}

export const useGlobalLoadingState = Client.useGlobalLoadingState
export const useQuery = _useQuery
export const gql = _gql