import { Ref } from "vue";

export interface Breakpoints {
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
}

export interface DetailedBreakpoints {
    isMobile: Ref<boolean>;
    isTablet: Ref<boolean>;
    isDesktop: Ref<boolean>;
} 