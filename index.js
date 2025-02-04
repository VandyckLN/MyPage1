import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const App = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                videoRef.current.seek(47); // Inicia o vídeo em 0:47
            }
        }, 60000); // Reinicia o vídeo a cada 60 segundos (1 minuto)

        return () => clearInterval(interval);
    }, []);

    const handleProgress = (data) => {
        if (data.currentTime >= 107) { // Termina o vídeo em 1:47
            videoRef.current.seek(47); // Reinicia o vídeo em 0:47
        }
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={require('./KevinLevrone.mp4')}
                style={styles.video}
                controls
                onProgress={handleProgress}
                onLoad={() => videoRef.current.seek(47)} // Inicia o vídeo em 0:47
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    video: {
        width: '100%',
        height: 300,
    },
});

export default App;
