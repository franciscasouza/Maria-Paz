import { useState, useRef } from 'react';

function MicrophoneTest() {
  const [status, setStatus] = useState('Clique para testar o microfone');
  const [isRecording, setIsRecording] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  const testMicrophone = async () => {
    try {
      setStatus('Solicitando permissão do microfone...');
      
      // Verificar se getUserMedia está disponível
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatus('❌ Seu navegador não suporta acesso ao microfone');
        return;
      }

      // Verificar permissões
      try {
        const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        setStatus(`Permissão: ${permission.state}`);
        
        if (permission.state === 'denied') {
          setStatus('❌ Permissão negada. Habilite o microfone nas configurações do navegador.');
          return;
        }
      } catch (e) {
        setStatus('Não foi possível verificar permissões, tentando acessar...');
      }

      // Tentar acessar o microfone
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000
        } 
      });

      streamRef.current = stream;
      setIsRecording(true);
      setStatus('✅ Microfone funcionando! Áudio sendo capturado.');
      
      // Criar analisador de áudio para mostrar atividade
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      
      microphone.connect(analyser);
      
      const checkAudio = () => {
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
        
        if (average > 0) {
          setStatus(`✅ Áudio detectado! Nível: ${Math.round(average)}`);
        }
        
        if (isRecording) {
          requestAnimationFrame(checkAudio);
        }
      };
      
      checkAudio();

    } catch (error: any) {
      console.error('Erro ao acessar microfone:', error);
      
      if (error.name === 'NotAllowedError') {
        setStatus('❌ Permissão negada pelo usuário. Clique no ícone de cadeado na barra de endereços.');
      } else if (error.name === 'NotFoundError') {
        setStatus('❌ Nenhum microfone encontrado.');
      } else if (error.name === 'NotReadableError') {
        setStatus('❌ Microfone está sendo usado por outro aplicativo.');
      } else {
        setStatus(`❌ Erro: ${error.message}`);
      }
      setIsRecording(false);
    }
  };

  const stopTest = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsRecording(false);
    setStatus('Teste interrompido');
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 10, 
      right: 10, 
      background: 'white', 
      padding: 20, 
      border: '2px solid #333',
      borderRadius: 10,
      zIndex: 9999,
      maxWidth: 300,
      fontSize: 14
    }}>
      <h3>🎤 Teste de Microfone</h3>
      <p>{status}</p>
      <button 
        onClick={isRecording ? stopTest : testMicrophone}
        style={{ 
          padding: '10px 20px', 
          margin: '10px 0',
          backgroundColor: isRecording ? '#ff4444' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer'
        }}
      >
        {isRecording ? 'Parar Teste' : 'Testar Microfone'}
      </button>
    </div>
  );
}

export default MicrophoneTest;
