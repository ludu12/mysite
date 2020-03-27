import axios from 'axios';
import { useEffect, useState } from 'react';

export function useGraphql(query: string) {
	const [result, setResult] = useState({ data: null, loading: true });

	useEffect(() => {
		setResult({ data: null, loading: true });
		axios.post(`${process.env.API_URL}`, { query }).then(r => {
			setResult({ data: r.data, loading: false });
		});
	}, [query]);

	return result;
};
