import { useEffect, useState } from 'react';
import api from '../../Services/api';  // Sua função de API

const consoles = ['PS5', 'Xbox', 'VR'];  // Lista de consoles que você deseja monitorar

const QueueManagement = () => {
  const [isUpdating, setIsUpdating] = useState(false);  // Para evitar múltiplas atualizações simultâneas

  useEffect(() => {
    console.log('Componente montado, iniciando o setInterval.');
    const interval = setInterval(async () => {
      if (isUpdating) {
        console.log('Aguardando a atualização anterior para evitar múltiplas chamadas...');
        return;  // Se já está atualizando, não faz outra atualização
      }

      setIsUpdating(true);  // Marca que está atualizando
      console.log('Iniciando atualização das filas...');

      try {
        // Atualiza as filas para cada console
        for (const consoleName of consoles) {
          console.log(`Buscando filas para o console: ${consoleName}`);

          // Chama a função leaveQueue para cada console
          const positionFila = 0;  // Define que queremos remover a posição 0

          console.log(`Removendo posição 0 da fila de ${consoleName}, posição: ${positionFila}`);

          // Chama a função para remover a posição da fila
          const result = await api.leaveQueue(consoleName, positionFila);
          console.log(`Resultado da remoção da fila ${consoleName}:`, result);
        }
      } catch (error) {
        console.error('Erro ao atualizar as filas:', error);
      } finally {
        setIsUpdating(false);  // Marca que a atualização foi concluída
        console.log('Atualização concluída, aguardando próximo ciclo.');
      }
    }, 30000);  // Atualiza a cada 5 segundos

    // Limpeza do intervalo quando o componente for desmontado
    return () => {
      clearInterval(interval);
      console.log('Intervalo limpo, componente desmontado.');
    };
  }, [isUpdating]);  // Não precisa de dependências específicas, mas evita reiniciar o intervalo

  return null;  // Não precisa renderizar nada, apenas executa a lógica
};

export default QueueManagement;
