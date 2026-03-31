
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jclwdcvwczaxbzhlrtws.supabase.co'; 
const supabaseKey = 'sb_publishable_z54zGLhm5oBQNM0Tlgot5w_h-e2LaqU';

const supabase = createClient(supabaseUrl, supabaseKey);

async function adicionarTarefa() {
  console.log("Adicionando uma nova tarefa ao Supabase...");
  
  
  const { data, error } = await supabase
    .from('tasks')
    .insert([
      { title: 'Aprender Supabase com Node.js', completed: false }
    ])
    .select(); 

  if (error) {
    console.error('Ops! Deu erro ao adicionar:', error.message);
  } else {
    console.log('Sucesso! Tarefa criada:', data);
  }
}

// Executando a função
adicionarTarefa();