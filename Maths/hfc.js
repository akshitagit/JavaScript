//numbers = [2, 4, 6]
//~ numbers = [54, 24]
//numbers = [15, 25, 35]

function hcf(vector){
  min_number = get_min_number(vector)
  
  for( hcf = min_number; hcf > 1; hcf--){
    found_hcf = true
    
    for( number of vector){
      if( number % hcf != 0 ){
         found_hcf = false
         break
      }
    }

    if( found_hcf == false)
      continue
      
    if( found_hcf == true)
      return hcf
  }
  
  return 1
  
}

function get_min_number(vector){
  min = 101
  
  for( value of vector){
    if( value < min){
      min = value
    }
  }
  return min
}


console.log(hcf(numbers))


