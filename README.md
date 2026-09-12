# WKORA Fitness V1 Full
MVP completo: Auth Firebase, onboarding, dashboard, treinos por nível, água/cardio/hábitos, avaliação por câmera com MediaPipe, agachamento com contador/feedback e histórico.
A câmera é processada no navegador. O código não envia vídeo nem usa Firebase Storage. Firestore guarda apenas perfil e métricas.
Configure `.env.local` usando `.env.example`, ative Email/Password e Firestore no Firebase e publique `firestore.rules`.
Aviso: a avaliação visual é informativa e não é diagnóstico médico.
