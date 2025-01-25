import openpyxl
import re
import json

def get_cell(file_path, sheet_name, cell):
  try:
    # Load the workbook
    workbook = openpyxl.load_workbook(file_path)
    sheet = workbook[sheet_name]

    # Get cell values
    cell_values = []
    for row in sheet[f'{cell}:{cell}']:
      for cell in row:
        cell_values.append(cell.value)

    return cell_values[0]

  except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
    return None
  except KeyError:
    print(f"Error: Sheet '{sheet_name}' not found in the Excel file.")
    return None
  except ValueError:
    print(f"Error: Invalid cell range '{cell_range}'.")
    return None

file_path = "Menu.xlsx"  # Replace with your file path
sheet_name = "menu"  # Replace with your sheet name
cell = "B2"  # Replace with your desired cell range

def process_cell(cell):
    food_string = get_cell(file_path, sheet_name, cell)
    items = food_string.split("\n\n")

    items = [item.replace("THEME\nNIGHT","THEME NIGHT") for item in items]
    items = [item.replace("\n","") for item in items]
    
    output_json = []

    for item in items: 
        output = {"title": ""}

        bracketed = re.findall(r'\((.*)\)', item)
        unbracketed = re.sub(r'\(.*\)', '', item)
        pattern = r"(?<=[a-z])(?=[A-Z])"  # Lookbehind for lowercase, lookahead for uppercase
        unbracketed = re.sub(pattern, "\n", unbracketed)
        
        output["title"] = unbracketed

        if len(bracketed):
            bracketed[0] = bracketed[0].replace(' ','')
            allergens = bracketed[0].split(',')
            output["allergies"] = allergens

        output_json.append(output)

    return output_json

days = []

def process_row(row_number):
    global days
    for col in "BCDEF":
       day_json = {"weekend": False}
       lunch_cell_code = f"{str(col)}{row_number}"
       lunch_data = process_cell(lunch_cell_code)
       day_json["lunch"] = {"mains": lunch_data}

       dinner_cell_code = f"{str(col)}{row_number+1}"
       dinner_data = process_cell(dinner_cell_code)
       day_json["dinner"] = {"mains": dinner_data}
       days.append(day_json)

    for col in "GH":
       day_json = {"weekend": True}
       day_json["lunch"] = {"mains": [
          {"title": "Full English Breakfast (including Vegan Sausage option)"},
          {"title": "Lunch Options: Pasta, Vegetables, Green Salad"}
       ]}

       dinner_cell_code = f"{col}{str(row_number+1)}"
       dinner_data = process_cell(dinner_cell_code)
       day_json["dinner"] = {"mains": dinner_data}
       days.append(day_json)

if __name__ == "__main__":
    for i in range(3):
        process_row(2)
        process_row(4)
        process_row(6)
    
    final_outout = {
        "start": "2025-01-20T00:00:00.238Z",
        "days": days
    }

    output_file = "menu.json"
    with open(output_file, 'w') as f:
       json.dump(final_outout, f, indent=2)