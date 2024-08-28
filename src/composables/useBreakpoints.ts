import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { Ref } from 'vue'
import { Breakpoints, DetailedBreakpoints } from "@/interfaces/index.ts"

export default () : DetailedBreakpoints => {
    const breakpoints: Breakpoints = useBreakpoints(breakpointsTailwind)
    const isMobile: Ref<Boolean> = breakpoints.smaller('md')
    const isTablet: Ref<Boolean> = breakpoints.between('md', 'lg')
    const isDesktop: Ref<Boolean> = breakpoints.greaterOrEqual('lg')
    return { isMobile, isTablet, isDesktop }
}
