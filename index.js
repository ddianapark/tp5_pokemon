const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const pokemonSection = document.getElementById('pokemon');
const pokemonName = document.getElementById('pokemon-name');
const img = document.getElementById('pokemon-image');
const types = document.getElementById('pokemon-types');
const weight = document.getElementById('pokemon-weight');
const height = document.getElementById('pokemon-height');

form.addEventListener('submit', e =>{
    e.preventDefault();
    const query = input.value;
    if(!query.trim()){
        showError('Ingrese el nombre de un Pokémon.');
        return;
    }
    fetchPokemon(query);
});

function showPokemon(data){
    pokemonName.textContent = capitalize(data.name);
    const artwork = data.sprites?.other?.['official-artwork']?.front_default || data.sprites?.front_default || '';
    if(artwork){
        img.src = artwork;
        img.alt = data.name;
    } else {
        img.src = '';
        img.alt = 'Imagen no disponible';
    }
    const typesText = (data.types || []).map(t => capitalize(t.type.name)).join(', ');
    types.textContent = typesText;
    weight.textContent = (data.weight / 10) + ' kg';
    height.textContent = (data.height / 10) + ' m';
    pokemonSection.classList.remove('hidden');
}

function capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function showError(msg){
    error.textContent = msg;
    error.classList.toggle('hidden', !msg);
}

function showLoading(show){
    loading.classList.toggle('hidden', !show);
}

async function fetchPokemon(name){
    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name.toLowerCase().trim())}`;
    pokemonSection.classList.add('hidden');
    showError('');
    showLoading(true);
        const delay = new Promise(resolve => setTimeout(resolve, 1000));
    try{
        const res = await fetch(url);
        if(!res.ok){
            if(res.status === 404) throw new Error('No se encontró ese Pokémon.');
            else throw new Error('Error en la petición.');
        }
        const data = await res.json();
        await delay;
        showPokemon(data);
    }
    catch(err){
        showError(err.message || 'Error desconocido');
    }
    finally{
        showLoading(false);
    }
}
