class Student  
{ 
    private String rollNo; 
    private String name; 
     
    public String getRollNo()  
    { 
        return rollNo; 
    } 
     
    public void setRollNo(String rollNo)  
    { 
        this.rollNo = rollNo; 
    } 
     
    public String getName()  
    { 
        return name; 
    } 
     
    public void setName(String name)  
    { 
        this.name = name; 
    } 
} 
  
class ClientView  
{ 
    public void printStudentDetails(String studentName, String studentRollNo) 
    { 
        System.out.println("Client: "); 
        System.out.println("Name: " + studentName); 
        System.out.println("Roll No: " + studentRollNo); 
    } 
} 
  
class ClientController  
{ 
    private Client model; 
    private ClientView view; 
  
    public ClientController(Student model, StudentView view) 
    { 
        this.model = model; 
        this.view = view; 
    } 
  
    public void setStudentName(String name) 
    { 
        model.setName(name);         
    } 
  
    public String getStudentName() 
    { 
        return model.getName();         
    } 
  
    public void setStudentRollNo(String rollNo) 
    { 
        model.setRollNo(rollNo);         
    } 
  
    public String getStudentRollNo() 
    { 
        return model.getRollNo();         
    } 
  
    public void updateView() 
    {                 
        view.printStudentDetails(model.getName(), model.getRollNo()); 
    }     
} 
  
class MVCPattern  
{ 
    public static void main(String[] args)  
    { 
        client model  = retriveStudentFromDatabase(); 
  
        ClientView view = new ClientView(); 
  
        ClientController controller = new ClientController(model, view); 
  
        controller.updateView(); 
  
        controller.setStudentName("Vikram Sharma"); 
  
        controller.updateView(); 
    } 
  
    private static Student retriveStudentFromDatabase() 
    { 
        Student student = new Student(); 
        client.setName("Bettie Davis"); 
        client.setRollNo("15UCS157"); 
        return client; 
    } 
      
} 
