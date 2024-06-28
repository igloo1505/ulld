dostuff() {
local options=()
local cmds=()
while read i
do
parts=("${(@s[|])i}")
        options+=($parts[1])
cmds+=($parts[2])
    done < /Users/bigsexy/Desktop/current/ulld/buildUtils/cmds.txt
    selected=$(for i in $options
        do
            echo $i
    done | fzf)
    cmd=$cmds[${options[(Ie)$selected]}]
$(sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'<<<"${cmd}")
}

dostuff
