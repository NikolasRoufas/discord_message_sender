import tkinter as tk

root = tk.Tk()
root.title("Example Widget")
root.geometry("200x200")

label = tk.Label(root, text="Hello, World!")
label.pack()

root.mainloop()
