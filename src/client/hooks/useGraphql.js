import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGraphql = (query, variables) => {
  const [result, setResult] = useState({ data: null, loading: true });

  useEffect(() => {
    setResult({ data: null, loading: true });
    axios.post(`${API_BASE}/admin/api`, { variables, query }).then(r => {
      setResult({ data: r.data, loading: false });
    });
  }, [query, variables]);
  
  return result;
};
