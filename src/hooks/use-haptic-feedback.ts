import { useCallback } from 'react';

type HapticFeedbackStyle = 'light' | 'medium' | 'heavy' | 'selection' | 'error' | 'success' | 'warning';

export function useHapticFeedback() {
    const isMobile = useCallback(() => {
        if (typeof window === 'undefined') return false;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }, []);

    const triggerHaptic = useCallback((style: HapticFeedbackStyle = 'light') => {
        if (typeof navigator === 'undefined' || !navigator.vibrate) return;

        switch (style) {
            case 'light':
                navigator.vibrate(10);
                break;
            case 'medium':
                navigator.vibrate(20);
                break;
            case 'heavy':
                navigator.vibrate(40);
                break;
            case 'selection':
                navigator.vibrate(5);
                break;
            case 'success':
                navigator.vibrate([10, 30, 10]);
                break;
            case 'warning':
                navigator.vibrate([10, 50, 10]);
                break;
            case 'error':
                navigator.vibrate([10, 50, 10, 50, 10]);
                break;
            default:
                break;
        }
    }, []);

    return { triggerHaptic, isMobile };
}
