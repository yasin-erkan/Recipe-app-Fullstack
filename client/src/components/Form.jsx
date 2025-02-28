import Select from 'react-select/creatable';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const Form = ({isLoading, mutate, recipeData}) => {
  const [ingredients, setIngredients] = useState(recipeData?.ingredients || []);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let newRecipe = Object.fromEntries(formData.entries());

    newRecipe.instructions = newRecipe.instructions.split(',');
    newRecipe.ingredients = ingredients;

    mutate(newRecipe);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 flex flex-col gap-7 max-w-[550px] mx-auto">
      <Field label="Title">
        <input
          className="inp"
          name="recipeName"
          required
          defaultValue={recipeData?.recipeName}
        />
      </Field>

      <Field label="Category">
        <input
          className="inp"
          name="category"
          required
          defaultValue={recipeData?.category}
        />
      </Field>

      <Field label="Recipe Time">
        <input
          className="inp"
          name="recipeTime"
          required
          defaultValue={recipeData?.recipeTime}
        />
      </Field>

      <Field label="Ingredients">
        <Select
          isMulti
          value={ingredients.map(i => ({value: i, label: i}))}
          onChange={options => setIngredients(options.map(opt => opt.value))}
        />
      </Field>

      <Field label="Recipe Steps (separate them with commas)">
        <textarea
          className="inp min-h-[80px] max-h-[300px] "
          name="instructions"
          required
          defaultValue={recipeData?.instructions}></textarea>
      </Field>

      <Field label="Serving Suggestion">
        <textarea
          className="inp min-h-[80px] max-h-[200px] "
          name="servingSuggestion"
          defaultValue={recipeData?.servingSuggestion}></textarea>
      </Field>

      <div className="flex justify-end gap-6">
        <Link to="/" className="btn">
          Back
        </Link>

        <button
          disabled={isLoading}
          className="btn bg-red-400 hover:bg-red-500"
          type="submit">
          {recipeData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default Form;

// HOC - Higher Order Components
const Field = ({children, label}) => {
  return (
    <div className="flex flex-col gap-1">
      <label> {label} </label>

      {children}
    </div>
  );
};
