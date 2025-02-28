import {useNavigate} from 'react-router-dom';
import api from '../api';
import Form from '../components/Form';
import {useMutation} from '@tanstack/react-query';
import {toast} from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();

  // API request
  const {isLoading, mutate} = useMutation({
    mutationFn: newRecipe => api.post('/api/v1/recipes', newRecipe),

    onSuccess: () => {
      toast.success('New recipe added successfully!');
      navigate('/');
    },

    onError: () => {
      toast.error('Something went wrong with the recipe.');
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-100 to-orange-200 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          🍽️ Create a New Recipe
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Share your favorite recipe with the world! Fill in the details below.
        </p>

        <Form isLoading={isLoading} mutate={mutate} />

        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-800 transition duration-300">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
