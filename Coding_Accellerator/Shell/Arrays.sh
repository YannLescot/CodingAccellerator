NAMES=( John Eric Jessica )
NUMBERS=( 1 2 3 )
STRINGS=( "Hello" "world")
NumberOfNames=${#NAMES[@]}
second_name=${NAMES[1]}
	echo ${NUMBERS[@]}
    echo ${STRINGS[@]}
    echo "There are ${NumberOfNames} names listed in the NAMES array"
    echo "The second name listed in the NAMES array is: ${second_name}"
