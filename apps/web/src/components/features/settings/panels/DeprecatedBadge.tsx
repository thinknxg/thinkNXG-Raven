import { Badge } from "@components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@components/ui/tooltip"
import _ from "@lib/translate"

/** Beside the title of an AI panel: the AI features are being retired, and the tooltip says what comes instead. */
export const DeprecatedBadge = () => (
    <Tooltip>
        <TooltipTrigger asChild>
            <Badge variant="subtle" theme="gray" size="sm" className="shrink-0">
                {_("Deprecated")}
            </Badge>
        </TooltipTrigger>
        <TooltipContent>{_("thinkNXG Raven will soon support AI integrations via thinkNXG Flow.")}</TooltipContent>
    </Tooltip>
)
