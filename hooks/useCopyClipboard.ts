import { useEffect, useState } from "react";

export function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);
    const [hasGrantedPermission, setHasGrantedPermission] = useState(false);

    const copy = (text: string) => {
        if (navigator.clipboard && hasGrantedPermission) {
            navigator?.clipboard?.writeText(text).then(
                () => {
                    setIsCopied(true);

                },
                () => {
                    setIsCopied(false);

                }
            );
            setIsCopied(true);
        }
    };

    // request permission to access clipboard or check if already granted
    useEffect(() => {
        if (navigator.permissions && navigator.permissions.query) {
            const queryPermission = async () => {
                navigator.permissions
                    .query({
                        name: "clipboard-write" as PermissionName,
                    })
                    .then((result) => {
                        if (result.state === "granted" || result.state === "prompt") {
                            setHasGrantedPermission(true);
                        }
                    })
                    .catch(() => {
                        // console.log(err);
                        setHasGrantedPermission(true);
                    });
            };
            queryPermission();
        } else {
            setHasGrantedPermission(true);
        }
    }, []);

    return { isCopied, copy };
}
