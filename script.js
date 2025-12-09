// PLC Dictionary Data Structure
const plcData = {
    categories: [
        {
            id: 'basic',
            name: 'Basic PLC Concepts',
            description: 'Fundamental concepts and terminology for PLC systems',
            icon: 'cpu',
            terms: [
                {
                    term: 'PLC (Programmable Logic Controller)',
                    definition: 'A digital computer designed for automation of electromechanical processes such as control of machinery on factory assembly lines, amusement rides, or lighting fixtures. PLCs are used in many industries and machines.',
                    related: ['I/O', 'Ladder Logic', 'Scan Time']
                },
                {
                    term: 'I/O (Input/Output)',
                    definition: 'Physical connection points where the PLC receives signals from input devices (sensors, switches) and sends control signals to output devices (motors, valves, lights).',
                    related: ['Discrete I/O', 'Analog I/O', 'Digital I/O']
                },
                {
                    term: 'Scan Time',
                    definition: 'The time required for a PLC to complete one complete cycle of reading inputs, executing the program logic, and updating outputs. Typical scan times range from 0.1 to 20 milliseconds.',
                    related: ['Real-time', 'Cycle Time', 'Response Time']
                },
                {
                    term: 'Ladder Logic',
                    definition: 'A programming language that represents program steps as graphical symbols resembling electrical relay ladder diagrams. It is the most common language used for PLC programming.',
                    related: ['Function Block', 'Structured Text', 'Relay Logic']
                },
                {
                    term: 'Rung',
                    definition: 'A single line or horizontal section of a ladder logic program that contains instructions for one logical operation. Each rung is executed in sequence during the scan cycle.',
                    related: ['Ladder Logic', 'Network', 'Branch']
                },
                {
                    term: 'Coil',
                    definition: 'An output instruction in ladder logic that sets or resets a bit in memory. When the logic path to the coil is TRUE, the coil is energized (set to 1).',
                    related: ['Contact', 'Output Coil', 'Bit Memory']
                },
                {
                    term: 'Contact',
                    definition: 'An input instruction in ladder logic that represents a physical input or internal memory bit. Contacts can be normally open (NO) or normally closed (NC).',
                    related: ['Coil', 'Input', 'Normally Open']
                },
                {
                    term: 'Bit Memory',
                    definition: 'Internal storage locations in PLC memory used to store Boolean (TRUE/FALSE) values. Also called internal coils or markers.',
                    related: ['Coil', 'Contact', 'Internal Memory']
                },
                {
                    term: 'Data Register',
                    definition: 'Memory locations used to store numerical values such as counters, timers, or process variables. Can hold integers, floating-point numbers, or ASCII strings.',
                    related: ['Word Memory', 'Timer', 'Counter']
                },
                {
                    term: 'Function Block',
                    definition: 'A programming element that performs a specific function such as timer, counter, PID control, or mathematical operations. Function blocks can have inputs, outputs, and internal parameters.',
                    related: ['Function Block Diagram', 'Ladder Logic', 'Structured Text']
                },
                {
                    term: 'Real-time Clock (RTC)',
                    definition: 'Hardware component that maintains accurate time and date even when the PLC is powered off. Used for time-stamping events and scheduled operations.',
                    related: ['Time Stamp', 'Scheduled Task', 'Calendar Function']
                },
                {
                    term: 'Memory Map',
                    definition: 'A diagram or table showing the layout of memory addresses and their functions in the PLC. Shows where inputs, outputs, and internal variables are stored.',
                    related: ['Memory Address', 'Data Area', 'Register Map']
                },
                {
                    term: 'Endianness',
                    definition: 'The byte ordering convention used by the PLC when storing multi-byte data in memory. Can be big-endian (most significant byte first) or little-endian.',
                    related: ['Byte Order', 'Word Format', 'Data Representation']
                },
                {
                    term: 'Watchdog Reset',
                    definition: 'Hardware or software function that resets the PLC watchdog timer to prevent timeout faults. Must be executed periodically to maintain system operation.',
                    related: ['Watchdog Timer', 'System Reset', 'Fault Detection']
                },
                {
                    term: 'Power-up Sequence',
                    definition: 'The order of operations that occur when the PLC is powered on, including self-test, memory initialization, and program loading.',
                    related: ['Boot Sequence', 'System Initialization', 'Power On Reset']
                },
                {
                    term: ' retentive Memory',
                    definition: 'Memory that retains its contents when power is removed, typically using battery backup or non-volatile storage. Used for critical data preservation.',
                    related: ['Battery Backup', 'Non-volatile Memory', 'Data Retention']
                },
                {
                    term: 'Scan Priority',
                    definition: 'The order in which program sections are executed within a scan cycle. Can be fixed or configurable to ensure critical functions run first.',
                    related: ['Task Priority', 'Program Execution', 'Real-time Processing']
                },
                {
                    term: 'Online Editing',
                    definition: 'The ability to modify PLC program logic while the system is running. Requires careful consideration of safety and system stability.',
                    related: ['Runtime Editing', 'Online Mode', 'Live Programming']
                },
                {
                    term: 'Data Types',
                    definition: 'The different types of data that can be stored and processed by the PLC, including Boolean, integer, real, string, and array types.',
                    related: ['Data Structure', 'Variable Type', 'Programming']
                },
                {
                    term: 'Scope Resolution',
                    definition: 'The rules that determine which variable or function is referenced when there are multiple objects with the same name in different program scopes.',
                    related: ['Variable Scope', 'Namespace', 'Program Organization']
                },
                {
                    term: 'Hot Standby',
                    definition: 'A redundancy configuration where a backup PLC continuously monitors the primary system and takes over immediately if the primary fails.',
                    related: ['Redundancy', 'Failover', 'System Backup']
                },
                {
                    term: 'Cold Start',
                    definition: 'PLC startup sequence that begins with cleared memory, requiring program download and configuration before operation can begin.',
                    related: ['Warm Start', 'Boot Sequence', 'System Initialization']
                },
                {
                    term: 'Warm Start',
                    definition: 'PLC restart that preserves memory contents, allowing quick recovery from temporary power interruptions.',
                    related: ['Cold Start', 'Memory Retention', 'Power Recovery']
                },
                {
                    term: 'Self-diagnostic',
                    definition: 'Built-in system that automatically tests PLC hardware and software components to detect faults during operation.',
                    related: ['Self-test', 'Health Monitoring', 'Fault Detection']
                },
                {
                    term: 'Cycle Time',
                    definition: 'Total time for one complete PLC scan cycle, including input processing, program execution, and output updates.',
                    related: ['Scan Time', 'Execution Time', 'Program Cycle']
                },
                {
                    term: 'Interrupt Priority',
                    definition: 'Hierarchical system that determines which interrupt tasks are executed first when multiple interrupts occur simultaneously.',
                    related: ['Interrupt', 'Priority Level', 'Task Priority']
                },
                {
                    term: 'Event Queue',
                    definition: 'Buffer storage area that holds pending events until they can be processed by the PLC program.',
                    related: ['Event Buffer', 'Message Queue', 'Asynchronous Processing']
                },
                {
                    term: 'Time Slice',
                    definition: 'Fixed time interval allocated to each task in multi-tasking PLC systems to ensure fair CPU resource distribution.',
                    related: ['Task Scheduling', 'CPU Allocation', 'Multi-tasking']
                },
                {
                    term: 'Memory Management',
                    definition: 'System for organizing and controlling access to PLC memory areas, including allocation and garbage collection.',
                    related: ['Memory Allocation', 'Data Management', 'Resource Control']
                },
                {
                    term: 'Stack Memory',
                    definition: 'LIFO (Last In, First Out) memory structure used for temporary data storage during program execution and subroutine calls.',
                    related: ['LIFO', 'Subroutine', 'Temporary Storage']
                },
                {
                    term: 'Heap Memory',
                    definition: 'Dynamic memory allocation area where data structures can be created and destroyed during program execution.',
                    related: ['Dynamic Memory', 'Memory Allocation', 'Data Structure']
                },
                {
                    term: 'Direct Addressing',
                    definition: 'Method of accessing memory locations by specifying their absolute addresses, providing fastest access to data.',
                    related: ['Memory Address', 'Absolute Addressing', 'Fast Access']
                },
                {
                    term: 'Symbolic Addressing',
                    definition: 'Memory access method using meaningful variable names instead of numeric addresses, improving program readability.',
                    related: ['Variable Name', 'Symbol Table', 'Program Readability']
                },
                {
                    term: 'Memory Protection',
                    definition: 'Hardware and software mechanisms that prevent unauthorized access to specific memory areas, ensuring system integrity.',
                    related: ['Memory Security', 'Access Control', 'System Protection']
                },
                {
                    term: 'Watchdog Circuit',
                    definition: 'Hardware timer circuit that monitors system operation and resets the system if proper operation is not detected.',
                    related: ['Watchdog Timer', 'System Monitor', 'Hardware Protection']
                },
                {
                    term: 'Power Supply Monitoring',
                    definition: 'System that continuously monitors power supply voltage and current to detect problems and protect equipment.',
                    related: ['Voltage Monitoring', 'Power Protection', 'System Health']
                },
                {
                    term: 'Temperature Monitoring',
                    definition: 'System that monitors internal and external temperature to prevent overheating and ensure optimal operation.',
                    related: ['Thermal Protection', 'Temperature Control', 'Heat Management']
                },
                {
                    term: 'Battery Management',
                    definition: 'System for monitoring battery voltage, current, and health to ensure reliable backup power.',
                    related: ['Battery Backup', 'Power Management', 'Battery Health']
                },
                {
                    term: 'Real-time Operating System (RTOS)',
                    definition: 'Operating system designed for applications requiring deterministic response times and real-time constraints.',
                    related: ['Real-time', 'Operating System', 'Deterministic']
                },
                {
                    term: 'Firmware',
                    definition: 'Low-level software stored in non-volatile memory that provides basic functionality and system control.',
                    related: ['Embedded Software', 'System Software', 'Non-volatile Memory']
                },
                {
                    term: 'Bootstrap Loader',
                    definition: 'Small program that initializes the PLC system and loads the main application program from memory.',
                    related: ['Boot Loader', 'System Initialization', 'Program Loading']
                },
                {
                    term: 'Memory Test',
                    definition: 'Diagnostic procedure that checks memory integrity by writing and reading patterns to detect faults.',
                    related: ['Memory Diagnostics', 'RAM Test', 'Memory Integrity']
                },
                {
                    term: 'Self-test Routine',
                    definition: 'Built-in diagnostic program that automatically checks hardware components and system functionality.',
                    related: ['Built-in Test', 'Self-diagnostic', 'System Check']
                },
                {
                    term: 'Error Recovery',
                    definition: 'Mechanisms and procedures for detecting, containing, and recovering from system errors.',
                    related: ['Error Handling', 'System Recovery', 'Fault Recovery']
                },
                {
                    term: 'System Configuration',
                    definition: 'Process of setting up system parameters, hardware options, and operational settings.',
                    related: ['System Setup', 'Parameter Configuration', 'Hardware Setup']
                },
                {
                    term: 'User Program',
                    definition: 'Application-specific logic written by the user to control machinery and processes.',
                    related: ['Application Program', 'Control Logic', 'User Logic']
                },
                {
                    term: 'System Program',
                    definition: 'Low-level software that provides basic PLC functionality, including I/O handling and communication.',
                    related: ['Operating System', 'System Software', 'Kernel']
                },
                {
                    term: 'Ground Fault Protection',
                    definition: 'System that detects and protects against ground faults that could damage equipment or create safety hazards.',
                    related: ['Electrical Safety', 'Fault Detection', 'Protection Circuit']
                },
                {
                    term: 'Surge Protection',
                    definition: 'Devices and circuits that protect PLC systems from voltage spikes and transients caused by lightning or switching.',
                    related: ['Voltage Protection', 'Transient Protection', 'Lightning Protection']
                },
                {
                    term: 'EMI Filtering',
                    definition: 'Electronic filters that suppress electromagnetic interference to ensure reliable PLC operation.',
                    related: ['Electromagnetic Interference', 'Noise Filtering', 'Signal Quality']
                },
                {
                    term: 'Isolation Transformer',
                    definition: 'Transformer that provides electrical isolation between input and output circuits for noise reduction and safety.',
                    related: ['Electrical Isolation', 'Noise Reduction', 'Safety Isolation']
                },
                {
                    term: 'Uninterruptible Power Supply (UPS)',
                    definition: 'Battery backup system that provides continuous power during utility power failures.',
                    related: ['Power Backup', 'Battery System', 'Power Continuity']
                },
                {
                    term: 'Power Factor Correction',
                    definition: 'System that improves power factor by compensating for reactive power in AC systems.',
                    related: ['Power Quality', 'Reactive Power', 'Energy Efficiency']
                },
                {
                    term: 'Harmonic Filtering',
                    definition: 'System that reduces harmonic distortion in electrical power systems caused by non-linear loads.',
                    related: ['Harmonic Distortion', 'Power Quality', 'Waveform Correction']
                },
                {
                    term: 'Environmental Protection Rating',
                    definition: 'IP (Ingress Protection) rating that indicates the degree of protection against dust and water.',
                    related: ['IP Rating', 'Environmental Sealing', 'Equipment Protection']
                },
                {
                    term: 'Conformal Coating',
                    definition: 'Protective coating applied to PCB components to protect against moisture and contaminants.',
                    related: ['Moisture Protection', 'PCB Protection', 'Environmental Sealing']
                },
                {
                    term: 'Thermal Management',
                    definition: 'System design and components that maintain optimal operating temperature for PLC equipment.',
                    related: ['Temperature Control', 'Heat Dissipation', 'Thermal Protection']
                },
                {
                    term: 'Heat Sink',
                    definition: 'Device that conducts heat away from electronic components to prevent overheating.',
                    related: ['Thermal Dissipation', 'Heat Management', 'Component Cooling']
                },
                {
                    term: 'DIN Rail Mounting',
                    definition: 'Standardized mounting system using DIN rails for secure and organized installation of PLC components.',
                    related: ['Standard Mounting', 'Rail System', 'Installation Standard']
                },
                {
                    term: 'Cable Management',
                    definition: 'Organized system for routing, securing, and protecting cables in industrial environments.',
                    related: ['Cable Organization', 'Wiring Management', 'Infrastructure']
                },
                {
                    term: 'Grounding System',
                    definition: 'Comprehensive electrical grounding network that provides safety and electromagnetic compatibility.',
                    related: ['Electrical Safety', 'EMC', 'Reference Ground']
                }
            ]
        },
        {
            id: 'programming',
            name: 'Programming Languages',
            description: 'PLC programming languages and methodologies',
            icon: 'code',
            terms: [
                {
                    term: 'Ladder Logic (LD)',
                    definition: 'IEC 61131-3 standard programming language that uses graphical symbols resembling electrical relay diagrams. Most widely used PLC programming language.',
                    related: ['Structured Text', 'Function Block Diagram', 'Instruction List']
                },
                {
                    term: 'Function Block Diagram (FBD)',
                    definition: 'IEC 61131-3 programming language that uses graphical blocks connected by lines to represent program logic. Blocks perform specific functions like timers, counters, or mathematical operations.',
                    related: ['Function Block', 'Ladder Logic', 'Visual Programming']
                },
                {
                    term: 'Structured Text (ST)',
                    definition: 'IEC 61131-3 high-level programming language similar to Pascal or C. Used for complex calculations and data manipulation.',
                    related: ['Ladder Logic', 'Programming', 'High-level Language']
                },
                {
                    term: 'Instruction List (IL)',
                    definition: 'IEC 61131-3 low-level programming language similar to assembly language. Uses mnemonic instructions to perform operations.',
                    related: ['Structured Text', 'Low-level Programming', 'Mnemonic']
                },
                {
                    term: 'Sequential Function Chart (SFC)',
                    definition: 'IEC 61131-3 programming language for complex sequential control processes. Uses steps, transitions, and actions to describe process sequences.',
                    related: ['State Machine', 'Sequential Control', 'Step Logic']
                },
                {
                    term: 'Subroutine',
                    definition: 'A reusable block of code that can be called from multiple places in the main program. Helps organize code and reduce redundancy.',
                    related: ['Function Block', 'Program Organization', 'Code Reuse']
                },
                {
                    term: 'Program Cycle',
                    definition: 'The time required for the PLC to execute all program instructions once. Also called scan time or sweep time.',
                    related: ['Scan Time', 'Real-time Execution', 'Program Scan']
                },
                {
                    term: 'Interrupts',
                    definition: 'High-priority program sections that execute immediately when triggered by specific events, bypassing normal scan sequence.',
                    related: ['Priority', 'Event-driven', 'Real-time']
                },
                {
                    term: 'Task',
                    definition: 'A program section that can be configured to run at specific intervals or triggered by events. Tasks allow parallel program execution.',
                    related: ['Cyclic Task', 'Event Task', 'Background Task']
                },
                {
                    term: 'Program Organization Unit (POU)',
                    definition: 'A functional unit of PLC programming that contains program logic. Can be programs, function blocks, or functions.',
                    related: ['Program', 'Function Block', 'Function']
                },
                {
                    term: 'Variable Declaration',
                    definition: 'The process of defining variables with their data types, addresses, and initial values. Essential for structured programming and type safety.',
                    related: ['Data Types', 'Variable Scope', 'Symbol Table']
                },
                {
                    term: 'Global Variable',
                    definition: 'A variable that can be accessed from any program or function block within the PLC project. Used for shared data between different program sections.',
                    related: ['Local Variable', 'Variable Scope', 'Shared Memory']
                },
                {
                    term: 'Local Variable',
                    definition: 'A variable that is only accessible within the specific program or function block where it is declared. Provides encapsulation and prevents naming conflicts.',
                    related: ['Global Variable', 'Variable Scope', 'Encapsulation']
                },
                {
                    term: 'Constant',
                    definition: 'A value that cannot be changed during program execution. Defined using CONST keyword and used for fixed parameters like limits or setpoints.',
                    related: ['Literal Value', 'Constant Declaration', 'Read-only']
                },
                {
                    term: 'Function',
                    definition: 'A POU that performs a specific calculation or operation and returns a single value. Functions cannot maintain internal state between calls.',
                    related: ['Function Block', 'POU', 'Return Value']
                },
                {
                    term: 'Edge Detection',
                    definition: 'Programming technique that detects the transition of a signal from FALSE to TRUE (rising edge) or TRUE to FALSE (falling edge).',
                    related: ['Rising Edge', 'Falling Edge', 'Pulse Generation']
                },
                {
                    term: 'Boolean Logic',
                    definition: 'Algebraic system that deals with TRUE/FALSE values and logical operations (AND, OR, NOT). Fundamental to all PLC programming.',
                    related: ['Logic Operation', 'Boolean Algebra', 'Truth Table']
                },
                {
                    term: 'Data Structure',
                    definition: 'A composite data type that groups related variables under a single name. Can include arrays, structures, and user-defined types.',
                    related: ['User-defined Type', 'Array', 'Structure']
                },
                {
                    term: 'Array',
                    definition: 'A data structure that contains multiple elements of the same data type, accessed by index. Used for storing sequential data or lookup tables.',
                    related: ['Index', 'Data Structure', 'Multi-dimensional Array']
                },
                {
                    term: 'Enumerated Type',
                    definition: 'A user-defined data type that assigns symbolic names to integer values. Improves code readability and prevents invalid values.',
                    related: ['User-defined Type', 'Enum', 'Symbolic Constant']
                },
                {
                    term: 'Polymorphism',
                    definition: 'The ability of function blocks to behave differently based on their input parameters or configuration. Enables flexible and reusable code.',
                    related: ['Function Block', 'Overloading', 'Dynamic Behavior']
                },
                {
                    term: 'Inheritance',
                    definition: 'Object-oriented programming concept where function blocks can inherit properties and methods from parent blocks.',
                    related: ['Object-oriented', 'Class Hierarchy', 'Code Reuse']
                },
                {
                    term: 'Encapsulation',
                    definition: 'Programming principle that bundles data and methods together while controlling access through well-defined interfaces.',
                    related: ['Data Hiding', 'Interface', 'Object-oriented']
                },
                {
                    term: 'Recursion',
                    definition: 'Programming technique where a function calls itself to solve problems that can be broken down into smaller sub-problems.',
                    related: ['Recursive Function', 'Self-calling', 'Algorithm']
                },
                {
                    term: 'Pointer',
                    definition: 'Variable that stores the memory address of another variable, allowing indirect access to data.',
                    related: ['Memory Address', 'Indirect Access', 'Reference']
                },
                {
                    term: 'Pointer Arithmetic',
                    definition: 'Mathematical operations performed on pointer variables to navigate through memory structures like arrays.',
                    related: ['Pointer', 'Array Navigation', 'Memory Manipulation']
                },
                {
                    term: 'Type Casting',
                    definition: 'Conversion of data from one type to another, either implicitly by the system or explicitly by the programmer.',
                    related: ['Data Type Conversion', 'Type Conversion', 'Data Manipulation']
                },
                {
                    term: 'Overloading',
                    definition: 'Ability to define multiple functions with the same name but different parameters, allowing flexible function usage.',
                    related: ['Function Overloading', 'Polymorphism', 'Multiple Definitions']
                },
                {
                    term: 'Namespace',
                    definition: 'Organizational construct that groups related identifiers together to prevent naming conflicts.',
                    related: ['Name Scope', 'Identifier Grouping', 'Code Organization']
                },
                {
                    term: 'Exception Handling',
                    definition: 'Programming mechanism for detecting and responding to runtime errors and exceptional conditions.',
                    related: ['Error Handling', 'Runtime Error', 'Fault Management']
                },
                {
                    term: 'Garbage Collection',
                    definition: 'Automatic memory management process that reclaims memory occupied by objects no longer in use.',
                    related: ['Memory Management', 'Automatic Cleanup', 'Resource Management']
                },
                {
                    term: 'Concurrency',
                    definition: 'Ability to execute multiple program tasks simultaneously or in overlapping time periods.',
                    related: ['Parallel Processing', 'Multi-threading', 'Task Management']
                },
                {
                    term: 'Synchronization',
                    definition: 'Coordination mechanism that ensures proper execution order and data consistency in concurrent programming.',
                    related: ['Thread Synchronization', 'Data Consistency', 'Process Coordination']
                },
                {
                    term: 'Deadlock',
                    definition: 'Programming error where two or more processes wait indefinitely for resources held by each other.',
                    related: ['Resource Conflict', 'Process Hang', 'System Stall']
                },
                {
                    term: 'Race Condition',
                    definition: 'Error that occurs when multiple processes access shared data concurrently, leading to unpredictable results.',
                    related: ['Concurrent Access', 'Data Integrity', 'Timing Dependency']
                },
                {
                    term: 'Thread Safety',
                    definition: 'Property of code that ensures proper execution in multi-threaded environments without data corruption.',
                    related: ['Multi-threading', 'Data Protection', 'Concurrent Safety']
                },
                {
                    term: 'Mutex (Mutual Exclusion)',
                    definition: 'Synchronization mechanism that prevents multiple threads from accessing shared resources simultaneously.',
                    related: ['Synchronization', 'Thread Control', 'Resource Protection']
                },
                {
                    term: 'Semaphore',
                    definition: 'Counter-based synchronization mechanism that controls access to shared resources by multiple processes.',
                    related: ['Resource Control', 'Synchronization', 'Access Control']
                },
                {
                    term: 'Critical Section',
                    definition: 'Code segment that must be executed by only one process at a time to prevent race conditions.',
                    related: ['Mutual Exclusion', 'Thread Safety', 'Code Protection']
                },
                {
                    term: 'Lock Mechanism',
                    definition: 'Hardware or software method for preventing simultaneous access to shared resources.',
                    related: ['Access Control', 'Resource Lock', 'Synchronization']
                },
                {
                    term: 'Atomic Operation',
                    definition: 'Operation that completes without interruption, ensuring data consistency in concurrent environments.',
                    related: ['Thread Safety', 'Data Integrity', 'Uninterruptible']
                },
                {
                    term: 'Message Passing',
                    definition: 'Inter-process communication method where processes exchange messages rather than shared memory.',
                    related: ['Inter-process Communication', 'Data Exchange', 'Process Communication']
                },
                {
                    term: 'Shared Memory',
                    definition: 'Memory region that can be accessed by multiple processes or threads for data exchange.',
                    related: ['Inter-process Communication', 'Memory Sharing', 'Data Exchange']
                },
                {
                    term: 'Memory Barrier',
                    definition: 'CPU instruction that ensures proper ordering of memory operations in multi-threaded programs.',
                    related: ['Memory Ordering', 'Thread Synchronization', 'CPU Barrier']
                },
                {
                    term: 'Cache Coherency',
                    definition: 'Property ensuring that multiple CPU caches maintain consistent data when sharing memory.',
                    related: ['Multi-processor', 'Cache Consistency', 'Memory Coherency']
                },
                {
                    term: 'Bus Lock',
                    definition: 'Hardware mechanism that prevents other processors from accessing the system bus during critical operations.',
                    related: ['CPU Synchronization', 'Bus Arbitration', 'Hardware Lock']
                },
                {
                    term: 'Interlocked Operation',
                    definition: 'Hardware-supported atomic operation that ensures data integrity during concurrent access.',
                    related: ['Atomic Operation', 'Hardware Support', 'Data Integrity']
                },
                {
                    term: 'Producer-Consumer',
                    definition: 'Programming pattern where one thread produces data and another consumes it, synchronized through buffers.',
                    related: ['Thread Pattern', 'Data Synchronization', 'Buffer Management']
                },
                {
                    term: 'Reader-Writer Lock',
                    definition: 'Lock that allows multiple readers or one writer to access shared data, improving concurrency.',
                    related: ['Lock Optimization', 'Concurrent Access', 'Data Protection']
                },
                {
                    term: 'Transaction',
                    definition: 'Set of operations that must complete entirely or not at all, ensuring data consistency.',
                    related: ['ACID Properties', 'Data Consistency', 'Atomic Operation']
                },
                {
                    term: 'State Machine',
                    definition: 'Programming model that uses states and transitions to control program flow based on current conditions.',
                    related: ['State Transition', 'Program Control', 'Logic Flow']
                },
                {
                    term: 'Finite State Machine',
                    definition: 'State machine with finite number of states, transitions, and actions, used for sequential control.',
                    related: ['State Machine', 'Sequential Control', 'Deterministic Logic']
                },
                {
                    term: 'State Transition Diagram',
                    definition: 'Visual representation of state machine showing states, transitions, and conditions.',
                    related: ['State Machine', 'Logic Diagram', 'Program Visualization']
                },
                {
                    term: 'Flowchart',
                    definition: 'Visual programming tool that uses symbols and arrows to represent program logic flow.',
                    related: ['Program Logic', 'Visual Programming', 'Logic Flow']
                },
                {
                    term: 'Pseudocode',
                    definition: 'Informal high-level description of programming logic before actual code implementation.',
                    related: ['Program Design', 'Logic Description', 'Code Planning']
                },
                {
                    term: 'Modular Programming',
                    definition: 'Programming approach that breaks complex programs into smaller, manageable modules.',
                    related: ['Program Structure', 'Code Organization', 'Modular Design']
                },
                {
                    term: 'Unit Testing',
                    definition: 'Testing individual program components or functions to verify correct operation.',
                    related: ['Component Testing', 'Program Verification', 'Code Testing']
                },
                {
                    term: 'Integration Testing',
                    definition: 'Testing the interaction between different program modules to ensure proper integration.',
                    related: ['Module Testing', 'System Testing', 'Interface Testing']
                },
                {
                    term: 'Code Review',
                    definition: 'Systematic examination of program code by peers to identify issues and improve quality.',
                    related: ['Code Quality', 'Peer Review', 'Code Inspection']
                },
                {
                    term: 'Refactoring',
                    definition: 'Process of restructuring existing code without changing its external behavior.',
                    related: ['Code Improvement', 'Code Restructuring', 'Maintenance']
                },
                {
                    term: 'Documentation',
                    definition: 'Written descriptions of program logic, variables, and procedures for maintenance and understanding.',
                    related: ['Code Documentation', 'Program Description', 'Maintenance']
                },
                {
                    term: 'Version Control',
                    definition: 'System for tracking changes to program files and coordinating work among multiple developers.',
                    related: ['Change Tracking', 'File Management', 'Collaboration']
                },
                {
                    term: 'Branch and Bound',
                    definition: 'Algorithm design technique for solving optimization problems by systematically exploring solution space.',
                    related: ['Algorithm', 'Optimization', 'Search Method']
                },
                {
                    term: 'Dynamic Programming',
                    definition: 'Algorithm technique that solves complex problems by breaking them into simpler subproblems.',
                    related: ['Algorithm Design', 'Problem Solving', 'Optimization']
                },
                {
                    term: 'Greedy Algorithm',
                    definition: 'Algorithm approach that makes locally optimal choices at each step to find global optimum.',
                    related: ['Algorithm', 'Optimization', 'Heuristic']
                },
                {
                    term: 'Backtracking',
                    definition: 'Algorithm technique that explores all possible solutions by systematically trying alternatives.',
                    related: ['Algorithm', 'Search', 'Problem Solving']
                }
            ]
        },
        {
            id: 'io',
            name: 'I/O Systems',
            description: 'Input and output hardware and signal types',
            icon: 'layers',
            terms: [
                {
                    term: 'Discrete I/O',
                    definition: 'Digital input/output signals that have only two states: ON (1) or OFF (0). Used for switches, pushbuttons, lights, and relays.',
                    related: ['Digital I/O', 'Binary', 'On/Off']
                },
                {
                    term: 'Analog I/O',
                    definition: 'Continuous input/output signals that can represent a range of values. Common analog signals include 4-20mA, 0-10V, and temperature sensors.',
                    related: ['Continuous Signal', 'Process Variable', 'Scaling']
                },
                {
                    term: 'Digital I/O',
                    definition: 'Electronic signals that represent binary data (0s and 1s). Digital inputs detect presence/absence of voltage, digital outputs control devices on/off.',
                    related: ['Discrete I/O', 'Binary', 'TTL']
                },
                {
                    term: '4-20mA Current Loop',
                    definition: 'Standard industrial signal transmission method using current rather than voltage. Provides better noise immunity and allows open-circuit detection.',
                    related: ['Current Loop', 'Industrial Standard', 'Signal Conditioning']
                },
                {
                    term: 'RTD (Resistance Temperature Detector)',
                    definition: 'Temperature sensor that changes resistance with temperature. Common types include PT100 and PT1000. Used for accurate temperature measurement.',
                    related: ['Temperature Sensor', 'PT100', 'Resistance Sensor']
                },
                {
                    term: 'Thermocouple',
                    definition: 'Temperature sensor that generates voltage based on temperature difference between two junctions. Common types include J, K, T, and R thermocouples.',
                    related: ['Temperature Sensor', 'Voltage Output', 'Cold Junction']
                },
                {
                    term: 'I/O Module',
                    definition: 'Removable module that provides connection points for input and output devices. Modules can be digital, analog, or specialized (communication, motion control).',
                    related: ['I/O Rack', 'Modular I/O', 'Remote I/O']
                },
                {
                    term: 'I/O Rack',
                    definition: 'Chassis or backplane that holds multiple I/O modules. Provides power and communication connections to the modules.',
                    related: ['I/O Module', 'Backplane', 'Chassis']
                },
                {
                    term: 'Remote I/O',
                    definition: 'I/O devices located away from the main PLC CPU, connected via communication networks. Reduces wiring costs in large installations.',
                    related: ['Distributed I/O', 'Fieldbus', 'Communication Network']
                },
                {
                    term: 'Signal Conditioning',
                    definition: 'Electronic circuits that convert sensor signals to appropriate levels for PLC input modules. May include amplification, filtering, or isolation.',
                    related: ['Analog Input', 'Signal Processing', 'Isolation']
                },
                {
                    term: 'Voltage Divider',
                    definition: 'Circuit that reduces input voltage to appropriate levels for PLC analog inputs. Used when sensor output voltage exceeds input range.',
                    related: ['Scaling', 'Analog Input', 'Voltage Range']
                },
                {
                    term: 'Current Shunt',
                    definition: 'Precision resistor used to measure current by converting it to a voltage drop. Common values include 50mV, 100mV, or 250mV full scale.',
                    related: ['Current Measurement', 'Shunt Resistor', 'Amperage']
                },
                {
                    term: 'Isolation Amplifier',
                    definition: 'Device that provides electrical isolation between input and output while maintaining signal fidelity. Protects PLC from voltage spikes and ground loops.',
                    related: ['Galvanic Isolation', 'Signal Isolation', 'Protection']
                },
                {
                    term: 'Input Impedance',
                    definition: 'The effective resistance presented by PLC input circuits to external devices. High impedance minimizes loading on sensor circuits.',
                    related: ['Input Resistance', 'Loading Effect', 'Source Impedance']
                },
                {
                    term: 'Sourcing Input',
                    definition: 'Digital input configuration where the input device provides current to the PLC input circuit. Common in NPN transistor outputs.',
                    related: ['Sinking Input', 'Current Source', 'NPN']
                },
                {
                    term: 'Sinking Input',
                    definition: 'Digital input configuration where the input device receives current from the PLC input circuit. Common in PNP transistor outputs.',
                    related: ['Sourcing Input', 'Current Sink', 'PNP']
                },
                {
                    term: 'Triac Output',
                    definition: 'Solid-state output device that controls AC loads by switching the phase angle. Used for dimming lights or controlling motor speed.',
                    related: ['AC Output', 'Phase Control', 'Solid State Relay']
                },
                {
                    term: 'Relay Output',
                    definition: 'Electromechanical relay contact that provides electrical isolation and can switch both AC and DC loads. Provides complete isolation.',
                    related: ['Contact Output', 'Electromechanical', 'Isolation']
                },
                {
                    term: 'Transistor Output',
                    definition: 'Solid-state output using transistors to switch DC loads. Faster switching than relays but limited to DC applications.',
                    related: ['DC Output', 'Solid State', 'NPN/PNP']
                },
                {
                    term: 'Hysteresis',
                    definition: 'The difference between turn-on and turn-off points in a switching circuit. Prevents rapid cycling when input is near the threshold.',
                    related: ['Switching Threshold', 'Dead Band', 'Contact Bounce']
                },
                {
                    term: 'Contact Debouncing',
                    definition: 'Electronic or software technique to eliminate false signals caused by mechanical switch contact bounce. Essential for reliable operation.',
                    related: ['Switch Debounce', 'Contact Bounce', 'Filtering']
                },
                {
                    term: 'Zero Crossing Detector',
                    definition: 'Circuit that detects when AC voltage passes through zero volts. Used for precise timing of triac firing in AC control applications.',
                    related: ['AC Control', 'Triac', 'Phase Control']
                },
                {
                    term: 'Pull-up Resistor',
                    definition: 'Resistor connected between signal line and positive voltage to ensure proper logic levels when devices are disconnected.',
                    related: ['Logic Level', 'Signal Integrity', 'Default State']
                },
                {
                    term: 'Pull-down Resistor',
                    definition: 'Resistor connected between signal line and ground to ensure proper logic levels when devices are disconnected.',
                    related: ['Logic Level', 'Signal Integrity', 'Default State']
                },
                {
                    term: 'Schmitt Trigger',
                    definition: 'Comparator circuit with hysteresis that provides noise immunity and clean signal transitions for digital inputs.',
                    related: ['Hysteresis', 'Noise Immunity', 'Signal Conditioning']
                },
                {
                    term: 'Opto-isolator',
                    definition: 'Device that uses light to provide electrical isolation between input and output circuits, protecting against voltage spikes.',
                    related: ['Optical Isolation', 'Galvanic Isolation', 'Protection']
                },
                {
                    term: 'Load Cell',
                    definition: 'Sensor that converts force or weight into electrical signal, commonly used in weighing and force measurement applications.',
                    related: ['Force Sensor', 'Weight Measurement', 'Strain Gauge']
                },
                {
                    term: 'Proximity Sensor',
                    definition: 'Non-contact sensor that detects presence of objects without physical contact, using ultrasonic, inductive, or capacitive methods.',
                    related: ['Non-contact', 'Object Detection', 'Position Sensing']
                },
                {
                    term: 'Inductive Sensor',
                    definition: 'Proximity sensor that detects metallic objects by changes in electromagnetic field when metal enters sensing range.',
                    related: ['Metal Detection', 'Electromagnetic', 'Proximity']
                },
                {
                    term: 'Capacitive Sensor',
                    definition: 'Proximity sensor that detects both metallic and non-metallic objects by changes in capacitance.',
                    related: ['Dielectric Detection', 'Material Sensing', 'Proximity']
                },
                {
                    term: 'Ultrasonic Sensor',
                    definition: 'Sensor that uses high-frequency sound waves to measure distance or detect objects without physical contact.',
                    related: ['Distance Measurement', 'Sound Wave', 'Non-contact']
                },
                {
                    term: 'Photoelectric Sensor',
                    definition: 'Light-based sensor that detects presence, absence, or passage of objects by measuring light interruption or reflection.',
                    related: ['Light Detection', 'Object Sensing', 'Optical Sensor']
                },
                {
                    term: 'Through-beam Sensor',
                    definition: 'Photoelectric sensor configuration where transmitter and receiver are separate units, detecting objects in between.',
                    related: ['Photoelectric', 'Object Detection', 'Light Barrier']
                },
                {
                    term: 'Diffuse Reflective Sensor',
                    definition: 'Photoelectric sensor where transmitter and receiver are in same housing, detecting objects by reflected light.',
                    related: ['Photoelectric', 'Reflection', 'Object Detection']
                },
                {
                    term: 'Retro-reflective Sensor',
                    definition: 'Photoelectric sensor that uses a reflector to detect objects by interruption of reflected light beam.',
                    related: ['Photoelectric', 'Reflector', 'Light Interruption']
                },
                {
                    term: 'Color Sensor',
                    definition: 'Optical sensor that can distinguish between different colors based on wavelength analysis of reflected light.',
                    related: ['Color Detection', 'Spectral Analysis', 'Optical Sensing']
                },
                {
                    term: 'Fiber Optic Sensor',
                    definition: 'Sensor that uses optical fiber to detect physical parameters like pressure, temperature, or strain through light modulation.',
                    related: ['Optical Fiber', 'Light Modulation', 'Remote Sensing']
                },
                {
                    term: 'Incremental Encoder',
                    definition: 'Position sensor that generates pulse trains proportional to rotation, used for speed and position feedback.',
                    related: ['Position Feedback', 'Rotation Sensor', 'Pulse Output']
                },
                {
                    term: 'Absolute Encoder',
                    definition: 'Position sensor that provides unique digital code for each position, maintaining position information during power loss.',
                    related: ['Position Sensor', 'Digital Position', 'Non-volatile Position']
                },
                {
                    term: 'Resolver',
                    definition: 'Rotary position sensor that uses electromagnetic induction to provide analog position feedback.',
                    related: ['Position Feedback', 'Analog Sensor', 'Electromagnetic']
                },
                {
                    term: 'Potentiometer',
                    definition: 'Variable resistor that converts linear or rotary position into electrical voltage for position sensing.',
                    related: ['Position Sensor', 'Variable Resistor', 'Analog Feedback']
                },
                {
                    term: 'Linear Variable Differential Transformer (LVDT)',
                    definition: 'Position sensor that uses transformer principle to measure linear displacement with high accuracy.',
                    related: ['Position Sensor', 'Displacement Measurement', 'Transformer']
                },
                {
                    term: 'Accelerometer',
                    definition: 'Sensor that measures acceleration forces, used for vibration monitoring and motion detection.',
                    related: ['Acceleration Sensor', 'Vibration Monitoring', 'Motion Detection']
                },
                {
                    term: 'Gyroscope',
                    definition: 'Sensor that measures angular velocity and orientation, used for navigation and stabilization.',
                    related: ['Angular Velocity', 'Orientation Sensor', 'Navigation']
                },
                {
                    term: 'Tachometer',
                    definition: 'Device that measures rotational speed, providing feedback for motor control applications.',
                    related: ['Speed Measurement', 'Rotation Sensor', 'Motor Feedback']
                },
                {
                    term: 'Pressure Sensor',
                    definition: 'Device that measures fluid pressure and converts it to electrical signal for process monitoring.',
                    related: ['Pressure Measurement', 'Process Control', 'Fluid Sensing']
                },
                {
                    term: 'Flow Sensor',
                    definition: 'Device that measures the rate of fluid flow through pipes or channels.',
                    related: ['Flow Measurement', 'Fluid Control', 'Process Monitoring']
                },
                {
                    term: 'Level Sensor',
                    definition: 'Device that detects liquid or solid material levels in tanks or containers.',
                    related: ['Level Detection', 'Tank Monitoring', 'Inventory Control']
                },
                {
                    term: 'Vibration Sensor',
                    definition: 'Accelerometer-based device that monitors machine vibration for predictive maintenance.',
                    related: ['Vibration Monitoring', 'Condition Monitoring', 'Predictive Maintenance']
                },
                {
                    term: 'Smart Sensor',
                    definition: 'Advanced sensor with built-in processing, communication, and diagnostic capabilities.',
                    related: ['Intelligent Sensor', 'Digital Sensor', 'Sensor Network']
                },
                {
                    term: 'Sensor Fusion',
                    definition: 'Combining data from multiple sensors to improve accuracy and reliability of measurements.',
                    related: ['Multi-sensor', 'Data Integration', 'Sensor Accuracy']
                },
                {
                    term: 'Hall Effect Sensor',
                    definition: 'Sensor that detects magnetic fields and is used for position, current, and speed sensing.',
                    related: ['Magnetic Sensor', 'Position Sensing', 'Current Sensing']
                },
                {
                    term: 'Eddy Current Sensor',
                    definition: 'Non-contact sensor that uses electromagnetic induction to measure position and thickness.',
                    related: ['Non-contact Sensing', 'Electromagnetic', 'Distance Measurement']
                },
                {
                    term: 'Laser Distance Sensor',
                    definition: 'High-precision sensor using laser technology for accurate distance and position measurements.',
                    related: ['Laser Measurement', 'Precision Sensing', 'Distance Control']
                },
                {
                    term: 'Radar Sensor',
                    definition: 'Sensor that uses radio waves to detect objects and measure distance in challenging environments.',
                    related: ['Radio Detection', 'Object Detection', 'All-weather Sensing']
                },
                {
                    term: 'Inductive Proximity Switch',
                    definition: 'Sensor that detects metallic objects without physical contact using electromagnetic field changes.',
                    related: ['Metal Detection', 'Non-contact', 'Proximity Sensing']
                },
                {
                    term: 'Capacitive Proximity Switch',
                    definition: 'Sensor that detects both metallic and non-metallic objects through capacitance changes.',
                    related: ['Object Detection', 'Dielectric Sensing', 'Material Detection']
                },
                {
                    term: 'Optical Encoder',
                    definition: 'Encoder that uses light and photodetectors to measure position and speed.',
                    related: ['Light-based Sensing', 'Position Feedback', 'Speed Measurement']
                },
                {
                    term: 'Magnetic Encoder',
                    definition: 'Encoder that uses magnetic fields and Hall effect sensors for position sensing.',
                    related: ['Magnetic Sensing', 'Position Feedback', 'Hall Effect']
                },
                {
                    term: 'Linear Encoder',
                    definition: 'Encoder designed for linear position measurement rather than rotational.',
                    related: ['Linear Position', 'Displacement Measurement', 'Linear Feedback']
                },
                {
                    term: 'Rotary Actuator',
                    definition: 'Device that converts pneumatic, hydraulic, or electric energy into rotational motion.',
                    related: ['Rotary Motion', 'Pneumatic Control', 'Actuator Technology']
                },
                {
                    term: 'Linear Actuator',
                    definition: 'Device that converts energy into linear motion for precise positioning applications.',
                    related: ['Linear Motion', 'Position Control', 'Actuator Technology']
                },
                {
                    term: 'Solenoid Valve',
                    definition: 'Electromagnetically controlled valve for directing fluid flow in pneumatic and hydraulic systems.',
                    related: ['Fluid Control', 'Electromagnetic Control', 'Valve Technology']
                },
                {
                    term: 'Proportional Valve',
                    definition: 'Valve that provides proportional control of flow rate based on input signal.',
                    related: ['Flow Control', 'Proportional Control', 'Analog Control']
                },
                {
                    term: 'Servo Valve',
                    definition: 'High-performance valve that provides precise control of fluid flow with fast response.',
                    related: ['Precision Control', 'High Performance', 'Fluid Control']
                },
                {
                    term: 'Manifold',
                    definition: 'Distribution device that routes fluid from multiple sources to multiple destinations.',
                    related: ['Fluid Distribution', 'Pneumatic System', 'Hydraulic System']
                },
                {
                    term: 'Filter Regulator',
                    definition: 'Combined unit that filters compressed air and regulates pressure for pneumatic systems.',
                    related: ['Air Treatment', 'Pressure Control', 'Pneumatic Maintenance']
                }
            ]
        },
        {
            id: 'communication',
            name: 'Communication Protocols',
            description: 'Network communication standards and protocols',
            icon: 'network',
            terms: [
                {
                    term: 'Modbus',
                    definition: 'Serial communication protocol widely used in industrial automation. Simple master/slave protocol that can operate over RS-485 or TCP/IP.',
                    related: ['Modbus RTU', 'Modbus TCP', 'Master/Slave']
                },
                {
                    term: 'Modbus RTU',
                    definition: 'Modbus protocol variant that operates over serial communication (RS-485). Uses binary encoding and supports up to 247 slave devices.',
                    related: ['Modbus', 'RS-485', 'Serial Communication']
                },
                {
                    term: 'Modbus TCP',
                    definition: 'Modbus protocol variant that operates over Ethernet networks using TCP/IP. Allows Modbus communication over standard network infrastructure.',
                    related: ['Modbus', 'Ethernet', 'TCP/IP']
                },
                {
                    term: 'Ethernet/IP',
                    definition: 'Industrial Ethernet protocol based on CIP (Common Industrial Protocol). Provides real-time communication for industrial automation.',
                    related: ['Industrial Ethernet', 'CIP', 'Real-time']
                },
                {
                    term: 'Profinet',
                    definition: 'Industrial Ethernet communication protocol developed by Siemens. Provides fast, deterministic communication for automation systems.',
                    related: ['Industrial Ethernet', 'Real-time', 'Siemens']
                },
                {
                    term: 'DeviceNet',
                    definition: 'CAN-based fieldbus protocol for industrial automation. Combines power and communication on the same cable for connected devices.',
                    related: ['CAN Bus', 'Fieldbus', 'Device Level']
                },
                {
                    term: 'Profibus',
                    definition: 'German fieldbus standard for industrial automation. Uses token-passing for deterministic communication between masters and slaves.',
                    related: ['Fieldbus', 'Token Passing', 'Deterministic']
                },
                {
                    term: 'HART Protocol',
                    definition: 'Hybrid communication protocol that combines analog 4-20mA signals with digital communication. Allows device configuration and diagnostics.',
                    related: ['4-20mA', 'Digital Communication', 'Smart Transmitter']
                },
                {
                    term: 'OPC (OLE for Process Control)',
                    definition: 'Standard interface for accessing process data from different automation systems. Uses Microsoft OLE/COM technology.',
                    related: ['OPC DA', 'OPC UA', 'SCADA Integration']
                },
                {
                    term: 'OPC UA (Unified Architecture)',
                    definition: 'Platform-independent, service-oriented communication protocol for industrial automation. Provides secure, reliable data exchange.',
                    related: ['OPC', 'Service-oriented', 'Security']
                },
                {
                    term: 'ASCII Communication',
                    definition: 'Text-based communication protocol using ASCII characters. Commonly used for interfacing with displays, printers, and legacy systems.',
                    related: ['Text Protocol', 'Serial Communication', 'Human Readable']
                },
                {
                    term: 'RTU (Remote Terminal Unit)',
                    definition: 'Device that interfaces with sensors and actuators in remote locations, typically connected to a central PLC via serial or network communication.',
                    related: ['Remote I/O', 'Telemetry', 'Field Device']
                },
                {
                    term: 'Client/Server Model',
                    definition: 'Communication architecture where clients request data from servers. OPC uses this model with servers providing data access to client applications.',
                    related: ['OPC Server', 'Data Publisher', 'Request/Response']
                },
                {
                    term: 'Publisher/Subscriber',
                    definition: 'Communication model where publishers broadcast data to subscribers without direct connection. Used in modern industrial protocols like Ethernet/IP.',
                    related: ['Data Broadcasting', 'Multicast', 'Real-time Communication']
                },
                {
                    term: 'Time Synchronization',
                    definition: 'Network protocol that ensures all devices maintain accurate time, critical for event logging and coordinated operations across multiple PLCs.',
                    related: ['NTP', 'Time Stamp', 'Clock Synchronization']
                },
                {
                    term: 'Bandwidth',
                    definition: 'The maximum data transmission rate of a communication channel, typically measured in bits per second (bps) or bytes per second.',
                    related: ['Data Rate', 'Throughput', 'Communication Speed']
                },
                {
                    term: 'Latency',
                    definition: 'The time delay between sending and receiving data over a network. Critical for real-time control applications.',
                    related: ['Response Time', 'Network Delay', 'Real-time']
                },
                {
                    term: 'Protocol Stack',
                    definition: 'The layered architecture of communication protocols, each layer handling specific aspects of data transmission from physical to application layer.',
                    related: ['OSI Model', 'Protocol Layers', 'Network Architecture']
                },
                {
                    term: 'Packet Sniffing',
                    definition: 'Network monitoring technique that captures and analyzes data packets for troubleshooting and performance analysis.',
                    related: ['Network Monitor', 'Protocol Analyzer', 'Troubleshooting']
                },
                {
                    term: 'Quality of Service (QoS)',
                    definition: 'Network feature that prioritizes certain types of traffic to ensure critical communication gets preference over less important data.',
                    related: ['Traffic Priority', 'Network Management', 'Real-time Communication']
                },
                {
                    term: 'Redundant Communication',
                    definition: 'Duplicate communication paths that provide backup connectivity if the primary network fails, ensuring continuous system operation.',
                    related: ['Network Redundancy', 'Failover', 'Backup Path']
                },
                {
                    term: 'Firewall Configuration',
                    definition: 'Security settings that control network traffic flow between different network segments, protecting automation systems from unauthorized access.',
                    related: ['Network Security', 'Access Control', 'Cybersecurity']
                },
                {
                    term: 'DHCP (Dynamic Host Configuration Protocol)',
                    definition: 'Network protocol that automatically assigns IP addresses and network configuration to devices on a network.',
                    related: ['IP Address Assignment', 'Network Configuration', 'Automatic Configuration']
                },
                {
                    term: 'DNS (Domain Name System)',
                    definition: 'Internet protocol that translates domain names into IP addresses for network communication.',
                    related: ['Name Resolution', 'Domain Name', 'IP Address']
                },
                {
                    term: 'SNMP (Simple Network Management Protocol)',
                    definition: 'Protocol for monitoring and managing network devices, including PLCs and industrial equipment.',
                    related: ['Network Management', 'Device Monitoring', 'Remote Management']
                },
                {
                    term: 'Time-out',
                    definition: 'Predefined period after which a communication operation is aborted if no response is received.',
                    related: ['Communication Timeout', 'Response Time', 'Network Timeout']
                },
                {
                    term: 'Retransmission',
                    definition: 'Process of resending data packets that were not successfully received or acknowledged.',
                    related: ['Data Re-send', 'Error Recovery', 'Reliable Communication']
                },
                {
                    term: 'Flow Control',
                    definition: 'Mechanism that regulates data transmission rate to prevent buffer overflow and ensure reliable communication.',
                    related: ['Data Rate Control', 'Buffer Management', 'Communication Control']
                },
                {
                    term: 'Error Detection',
                    definition: 'Methods for identifying transmission errors using checksums, CRC, or parity bits.',
                    related: ['Data Integrity', 'Error Checking', 'Communication Reliability']
                },
                {
                    term: 'Error Correction',
                    definition: 'Advanced error detection and correction methods that can fix certain types of transmission errors.',
                    related: ['Data Recovery', 'Error Handling', 'Reliable Communication']
                },
                {
                    term: 'Parity Check',
                    definition: 'Simple error detection method that adds an extra bit to ensure even or odd number of 1s in data.',
                    related: ['Error Detection', 'Data Integrity', 'Simple Error Check']
                },
                {
                    term: 'CRC (Cyclic Redundancy Check)',
                    definition: 'Advanced error detection method that uses polynomial arithmetic to detect multiple-bit errors.',
                    related: ['Error Detection', 'Polynomial Code', 'Advanced Error Check']
                },
                {
                    term: 'Checksum',
                    definition: 'Error detection method that calculates sum of all bytes in data packet for verification.',
                    related: ['Error Detection', 'Data Validation', 'Simple Verification']
                },
                {
                    term: 'Handshaking',
                    definition: 'Communication protocol that establishes connection and synchronizes data transfer between devices.',
                    related: ['Connection Setup', 'Protocol Synchronization', 'Communication Initiation']
                },
                {
                    term: 'Polling',
                    definition: 'Communication method where master device regularly queries slave devices for data or status.',
                    related: ['Master/Slave', 'Data Request', 'Periodic Query']
                },
                {
                    term: 'Event-driven Communication',
                    definition: 'Communication method where devices send data only when specific events occur, reducing network traffic.',
                    related: ['Asynchronous Communication', 'Event Notification', 'Efficient Communication']
                },
                {
                    term: 'Time Division Multiple Access (TDMA)',
                    definition: 'Communication method that assigns time slots to different devices for exclusive channel access.',
                    related: ['Time Slot', 'Channel Access', 'Multiple Access']
                },
                {
                    term: 'Frequency Division Multiple Access (FDMA)',
                    definition: 'Communication method that divides frequency spectrum among different users or devices.',
                    related: ['Frequency Division', 'Channel Separation', 'Multiple Access']
                },
                {
                    term: 'Code Division Multiple Access (CDMA)',
                    definition: 'Communication method that uses unique codes to allow multiple users to share the same frequency.',
                    related: ['Code Division', 'Spread Spectrum', 'Multiple Access']
                },
                {
                    term: 'Carrier Sense Multiple Access (CSMA)',
                    definition: 'Network protocol where devices listen for carrier signals before transmitting to avoid collisions.',
                    related: ['Collision Detection', 'Network Protocol', 'Media Access']
                },
                {
                    term: 'Token Ring',
                    definition: 'Network topology where a token circulates to control access to the communication medium.',
                    related: ['Token Passing', 'Network Topology', 'Access Control']
                },
                {
                    term: 'Token Bus',
                    definition: 'Network protocol that uses token passing on a bus topology for deterministic access control.',
                    related: ['Token Passing', 'Bus Network', 'Deterministic Access']
                },
                {
                    term: 'Carrier Extension',
                    definition: 'Ethernet technique that extends minimum frame size for compatibility with different network speeds.',
                    related: ['Ethernet', 'Frame Extension', 'Network Compatibility']
                },
                {
                    term: 'Frame Check Sequence (FCS)',
                    definition: 'Error detection field at the end of network frames, typically using CRC algorithm.',
                    related: ['Error Detection', 'Frame Validation', 'CRC']
                },
                {
                    term: 'Maximum Transmission Unit (MTU)',
                    definition: 'Largest packet size that can be transmitted over a network without fragmentation.',
                    related: ['Packet Size', 'Network Fragmentation', 'Data Transfer']
                },
                {
                    term: 'Path MTU Discovery',
                    definition: 'Protocol that determines the maximum packet size that can traverse a network path.',
                    related: ['MTU', 'Path Discovery', 'Packet Optimization']
                },
                {
                    term: 'Fragmentation',
                    definition: 'Process of breaking large data packets into smaller segments for transmission over networks with limited MTU.',
                    related: ['Packet Fragmentation', 'Data Segmentation', 'Network Compatibility']
                },
                {
                    term: 'Path Vector',
                    definition: 'Routing protocol mechanism that tracks the path taken by packets through the network.',
                    related: ['Routing Protocol', 'Path Tracking', 'Network Routing']
                },
                {
                    term: 'Link State',
                    definition: 'Routing information that describes the state of network links between routers.',
                    related: ['Routing Protocol', 'Network Topology', 'Link Information']
                },
                {
                    term: 'Distance Vector',
                    definition: 'Routing protocol where routers exchange information about distances to network destinations.',
                    related: ['Routing Protocol', 'Distance Information', 'Path Calculation']
                },
                {
                    term: 'Hierarchical Routing',
                    definition: 'Routing approach that organizes networks in hierarchy to reduce routing table size and complexity.',
                    related: ['Network Hierarchy', 'Routing Optimization', 'Scalable Routing']
                },
                {
                    term: 'WirelessHART',
                    definition: 'Wireless communication protocol specifically designed for process automation applications.',
                    related: ['Wireless Communication', 'Process Automation', 'HART Protocol']
                },
                {
                    term: 'ISA100.11a',
                    definition: 'Wireless standard for process automation that provides reliable, secure wireless communication.',
                    related: ['Wireless Standard', 'Process Automation', 'Industrial Wireless']
                },
                {
                    term: 'Wireless Sensor Network (WSN)',
                    definition: 'Network of distributed sensors that communicate wirelessly to monitor environmental conditions.',
                    related: ['Sensor Network', 'Wireless Communication', 'Distributed Monitoring']
                },
                {
                    term: 'Bluetooth Low Energy (BLE)',
                    definition: 'Low-power wireless technology for short-range communication between devices.',
                    related: ['Low-power Wireless', 'Short-range Communication', 'Energy Efficient']
                },
                {
                    term: 'Wi-Fi Direct',
                    definition: 'Wi-Fi standard that allows devices to connect directly without wireless access points.',
                    related: ['Direct Communication', 'Peer-to-peer', 'Wi-fi Technology']
                },
                {
                    term: 'LoRaWAN',
                    definition: 'Long-range, low-power wireless communication protocol for IoT applications.',
                    related: ['Long-range Communication', 'Low Power', 'IoT Protocol']
                },
                {
                    term: 'Thread Network',
                    definition: 'IP-based mesh networking protocol designed for smart home and IoT applications.',
                    related: ['Mesh Networking', 'IP-based', 'IoT Communication']
                },
                {
                    term: 'Matter Protocol',
                    definition: 'Unified communication standard for smart home and IoT devices across different ecosystems.',
                    related: ['Smart Home', 'Unified Standard', 'IoT Interoperability']
                },
                {
                    term: 'MQTT (Message Queuing Telemetry Transport)',
                    definition: 'Lightweight messaging protocol for IoT devices with limited processing power.',
                    related: ['IoT Protocol', 'Lightweight Messaging', 'Telemetry']
                },
                {
                    term: 'CoAP (Constrained Application Protocol)',
                    definition: 'Specialized web transfer protocol for IoT devices with constrained resources.',
                    related: ['IoT Protocol', 'Constrained Devices', 'Web Protocol']
                },
                {
                    term: 'DDS (Data Distribution Service)',
                    definition: 'Middleware standard for real-time and mission-critical systems requiring high performance.',
                    related: ['Real-time Communication', 'Middleware', 'Mission Critical']
                },
                {
                    term: 'AMQP (Advanced Message Queuing Protocol)',
                    definition: 'Open standard application layer protocol for message-oriented middleware.',
                    related: ['Message Protocol', 'Middleware', 'Enterprise Communication']
                },
                {
                    term: 'Time-Sensitive Networking (TSN)',
                    definition: 'Set of IEEE standards for deterministic Ethernet communication in industrial applications.',
                    related: ['Deterministic Ethernet', 'Real-time Communication', 'Industrial Ethernet']
                },
                {
                    term: 'PROFINET IRT',
                    definition: 'PROFINET variant that provides isochronous real-time communication for motion control.',
                    related: ['PROFINET', 'Motion Control', 'Real-time Communication']
                },
                {
                    term: 'EtherCAT',
                    definition: 'High-performance Ethernet fieldbus that provides deterministic real-time communication.',
                    related: ['Industrial Ethernet', 'Real-time Communication', 'High Performance']
                },
                {
                    term: 'SERCOS III',
                    definition: 'Digital interface for servo drives and motion control applications with real-time capabilities.',
                    related: ['Motion Control', 'Servo Drive', 'Real-time Interface']
                }
            ]
        },
        {
            id: 'troubleshooting',
            name: 'Troubleshooting & Maintenance',
            description: 'Diagnostic tools and maintenance procedures',
            icon: 'wrench',
            terms: [
                {
                    term: 'Force I/O',
                    definition: 'Software function that allows forcing input or output values to specific states for testing purposes. Used to override actual sensor readings during troubleshooting.',
                    related: ['Test Mode', 'Override', 'Debugging']
                },
                {
                    term: 'Watchdog Timer',
                    definition: 'Safety mechanism that monitors program execution time. If the program fails to complete within set time, the watchdog triggers a fault condition.',
                    related: ['Fault Detection', 'Safety', 'Program Monitor']
                },
                {
                    term: 'Fault Buffer',
                    definition: 'Memory area that stores fault information including fault type, location, and timestamp. Used for troubleshooting system problems.',
                    related: ['Diagnostic', 'Fault History', 'Error Logging']
                },
                {
                    term: 'Online Monitoring',
                    definition: 'Real-time viewing of program execution, I/O status, and variable values while the PLC is running. Essential for troubleshooting.',
                    related: ['Debugging', 'Online Mode', 'Runtime Monitoring']
                },
                {
                    term: 'Cross Reference',
                    definition: 'Report showing all references to a specific variable or address throughout the program. Helps identify where variables are used.',
                    related: ['Variable Usage', 'Program Analysis', 'Documentation']
                },
                {
                    term: 'Upload/Download',
                    definition: 'Process of transferring programs between PLC and programming device. Upload reads from PLC, download writes to PLC.',
                    related: ['Program Transfer', 'Backup', 'Commissioning']
                },
                {
                    term: 'Boot Project',
                    definition: 'Configuration that automatically loads a program into PLC memory when power is applied. Ensures proper startup behavior.',
                    related: ['Auto Start', 'Power-up', 'Startup Configuration']
                },
                {
                    term: 'Memory Backup',
                    definition: 'Battery or capacitor system that maintains program and data memory when main power is removed. Prevents loss of configuration.',
                    related: ['Battery Backup', 'Non-volatile Memory', 'Data Retention']
                },
                {
                    term: 'Hot Swap',
                    definition: 'Ability to replace I/O modules while the system is running. Requires appropriate safety measures and redundancy.',
                    related: ['Module Replacement', 'Redundancy', 'Online Maintenance']
                },
                {
                    term: 'Diagnostics',
                    definition: 'Systematic process of identifying and resolving problems. Includes monitoring, logging, and analysis of system behavior.',
                    related: ['Fault Detection', 'Troubleshooting', 'System Health']
                },
                {
                    term: 'Preventive Maintenance',
                    definition: 'Scheduled maintenance activities performed before equipment failure occurs. Includes cleaning, calibration, and component replacement.',
                    related: ['Scheduled Maintenance', 'Condition Monitoring', 'Equipment Care']
                },
                {
                    term: 'Calibration',
                    definition: 'Process of adjusting sensor or instrument readings to match known reference standards. Critical for accurate process control.',
                    related: ['Sensor Adjustment', 'Accuracy', 'Reference Standard']
                },
                {
                    term: 'Root Cause Analysis',
                    definition: 'Systematic investigation technique to identify the fundamental cause of problems rather than just treating symptoms.',
                    related: ['Problem Solving', 'Failure Analysis', 'Systematic Investigation']
                },
                {
                    term: 'Log File',
                    definition: 'Chronological record of system events, alarms, and operator actions. Essential for troubleshooting and compliance documentation.',
                    related: ['Event Logging', 'Audit Trail', 'System History']
                },
                {
                    term: 'Performance Monitoring',
                    definition: 'Continuous observation of system parameters to detect degradation and optimize performance before failures occur.',
                    related: ['System Health', 'Trend Analysis', 'Predictive Maintenance']
                },
                {
                    term: 'Backup and Restore',
                    definition: 'Process of creating copies of programs and configurations for safekeeping, and procedures to restore them when needed.',
                    related: ['Data Protection', 'Program Backup', 'System Recovery']
                },
                {
                    term: 'Version Control',
                    definition: 'System for tracking changes to PLC programs and configurations over time, enabling rollback to previous versions if needed.',
                    related: ['Program Versioning', 'Change Management', 'Configuration Management']
                },
                {
                    term: 'Trend Analysis',
                    definition: 'Historical data analysis to identify patterns and trends that may indicate impending equipment failure or process problems.',
                    related: ['Data Analysis', 'Predictive Maintenance', 'Historical Data']
                },
                {
                    term: 'Condition Monitoring',
                    definition: 'Continuous monitoring of equipment condition using sensors and analysis to detect changes that indicate maintenance needs.',
                    related: ['Equipment Health', 'Predictive Maintenance', 'Sensor Monitoring']
                },
                {
                    term: 'Spare Parts Management',
                    definition: 'Systematic inventory of critical replacement parts to minimize downtime when equipment failures occur.',
                    related: ['Inventory Control', 'Equipment Support', 'Downtime Reduction']
                },
                {
                    term: 'Maintenance Schedule',
                    definition: 'Planned calendar of maintenance activities based on equipment usage, manufacturer recommendations, or condition monitoring.',
                    related: ['Preventive Maintenance', 'Work Planning', 'Resource Allocation']
                },
                {
                    term: 'Failure Mode Analysis',
                    definition: 'Study of potential ways equipment can fail and their effects on system operation. Used for reliability engineering.',
                    related: ['Reliability Analysis', 'Risk Assessment', 'FMEA']
                },
                {
                    term: 'Mean Time Between Failures (MTBF)',
                    definition: 'Statistical measure of average time between equipment failures, used for reliability assessment and maintenance planning.',
                    related: ['Reliability Metric', 'Equipment Life', 'Maintenance Planning']
                },
                {
                    term: 'Mean Time To Repair (MTTR)',
                    definition: 'Average time required to repair equipment after failure, including diagnosis, parts acquisition, and repair completion.',
                    related: ['Repair Time', 'Downtime', 'Maintenance Efficiency']
                },
                {
                    term: 'Overall Equipment Effectiveness (OEE)',
                    definition: 'Comprehensive metric that measures manufacturing equipment performance based on availability, performance, and quality.',
                    related: ['Equipment Performance', 'Manufacturing Efficiency', 'Productivity Metric']
                },
                {
                    term: 'Total Productive Maintenance (TPM)',
                    definition: 'Maintenance philosophy that involves all employees in equipment maintenance to maximize operational efficiency.',
                    related: ['Preventive Maintenance', 'Employee Involvement', 'Operational Efficiency']
                },
                {
                    term: 'Work Order System',
                    definition: 'Structured system for planning, scheduling, and tracking maintenance and repair activities.',
                    related: ['Maintenance Planning', 'Work Scheduling', 'Task Management']
                },
                {
                    term: 'Criticality Analysis',
                    definition: 'Method of ranking equipment or components based on their importance to operations and impact of failure.',
                    related: ['Equipment Priority', 'Risk Assessment', 'Maintenance Focus']
                },
                {
                    term: 'Change Management',
                    definition: 'Structured process for managing changes to PLC programs, hardware, or procedures to minimize risks.',
                    related: ['Configuration Management', 'Change Control', 'Risk Mitigation']
                },
                {
                    term: 'Knowledge Management',
                    definition: 'Systematic approach to capturing, sharing, and using maintenance knowledge and experience.',
                    related: ['Information Sharing', 'Expert Knowledge', 'Best Practices']
                },
                {
                    term: 'Asset Lifecycle',
                    definition: 'Total lifespan of equipment from acquisition through operation to retirement and disposal.',
                    related: ['Equipment Life', 'Asset Management', 'Life Cycle Cost']
                },
                {
                    term: 'Condition-based Maintenance',
                    definition: 'Maintenance strategy based on actual equipment condition rather than scheduled time intervals.',
                    related: ['Predictive Maintenance', 'Equipment Monitoring', 'Condition Monitoring']
                },
                {
                    term: 'Reliability-centered Maintenance',
                    definition: 'Maintenance approach that focuses on equipment functions and consequences of failure to optimize maintenance strategies.',
                    related: ['RCM', 'Maintenance Optimization', 'Risk-based Maintenance']
                },
                {
                    term: 'Failure Analysis',
                    definition: 'Systematic investigation of equipment failures to determine root causes and prevent recurrence.',
                    related: ['Root Cause Analysis', 'Problem Investigation', 'Failure Prevention']
                },
                {
                    term: 'Spare Parts Strategy',
                    definition: 'Policy for determining which spare parts to stock and in what quantities to minimize downtime.',
                    related: ['Inventory Management', 'Downtime Reduction', 'Parts Planning']
                },
                {
                    term: 'Work Cell',
                    definition: 'Organized maintenance approach where teams are responsible for specific equipment or production areas.',
                    related: ['Maintenance Team', 'Equipment Responsibility', 'Focused Maintenance']
                },
                {
                    term: 'Total Cost of Ownership (TCO)',
                    definition: 'Comprehensive cost analysis including purchase price, operation, maintenance, and disposal costs.',
                    related: ['Lifecycle Cost', 'Cost Analysis', 'Investment Analysis']
                },
                {
                    term: 'Return on Investment (ROI)',
                    definition: 'Financial metric that measures the profitability of maintenance and improvement investments.',
                    related: ['Investment Analysis', 'Cost Benefit', 'Financial Performance']
                },
                {
                    term: 'Key Performance Indicator (KPI)',
                    definition: 'Measurable value that demonstrates effectiveness in achieving key business objectives.',
                    related: ['Performance Metric', 'Business Objective', 'Measurement']
                },
                {
                    term: 'Benchmarking',
                    definition: 'Process of comparing performance metrics against industry standards or best practices.',
                    related: ['Performance Comparison', 'Industry Standard', 'Best Practice']
                },
                {
                    term: 'Performance Baseline',
                    definition: 'Reference point for measuring performance improvements or degradations over time.',
                    related: ['Reference Point', 'Performance Reference', 'Baseline Measurement']
                },
                {
                    term: 'Capability Maturity Model',
                    definition: 'Framework for assessing and improving organizational processes and capabilities.',
                    related: ['Process Improvement', 'Maturity Assessment', 'Capability Analysis']
                },
                {
                    term: 'Continuous Improvement',
                    definition: 'Ongoing effort to improve products, services, or processes through incremental improvements.',
                    related: ['Improvement Process', 'Incremental Enhancement', 'Process Optimization']
                },
                {
                    term: 'Lean Manufacturing',
                    definition: 'Manufacturing philosophy focused maximizing customer on eliminating waste and value.',
                    related: ['Waste Reduction', 'Value Stream', 'Efficiency']
                },
                {
                    term: 'Six Sigma',
                    definition: 'Quality management methodology aimed at reducing defects and process variation.',
                    related: ['Quality Management', 'Defect Reduction', 'Process Control']
                },
                {
                    term: 'Root Cause Elimination',
                    definition: 'Permanent solution that eliminates the fundamental cause of problems rather than symptoms.',
                    related: ['Problem Solving', 'Permanent Solution', 'Cause Analysis']
                },
                {
                    term: 'Proactive Maintenance',
                    definition: 'Maintenance approach that prevents problems before they occur through analysis and prediction.',
                    related: ['Problem Prevention', 'Predictive Action', 'Maintenance Strategy']
                },
                {
                    term: 'Reactive Maintenance',
                    definition: 'Maintenance performed in response to equipment failures or problems as they occur.',
                    related: ['Breakdown Maintenance', 'Emergency Repair', 'Problem Response']
                },
                {
                    term: 'Deferred Maintenance',
                    definition: 'Maintenance activities that are postponed due to resource constraints or scheduling conflicts.',
                    related: ['Maintenance Postponement', 'Scheduled Delay', 'Resource Planning']
                },
                {
                    term: 'Maintenance Window',
                    definition: 'Scheduled time period when equipment can be safely shut down for maintenance activities.',
                    related: ['Scheduled Maintenance', 'Downtime Planning', 'Maintenance Schedule']
                },
                {
                    term: 'Emergency Maintenance',
                    definition: 'Unplanned maintenance required to restore equipment to operational status after failure.',
                    related: ['Unplanned Repair', 'Breakdown Response', 'Emergency Repair']
                },
                {
                    term: 'Infrared Thermography',
                    definition: 'Non-contact temperature measurement technique using infrared cameras for condition monitoring.',
                    related: ['Temperature Monitoring', 'Non-contact Measurement', 'Thermal Imaging']
                },
                {
                    term: 'Ultrasonic Testing',
                    definition: 'Non-destructive testing method using high-frequency sound waves to detect internal defects.',
                    related: ['Non-destructive Testing', 'Ultrasonic', 'Defect Detection']
                },
                {
                    term: 'Vibration Analysis',
                    definition: 'Technique for monitoring machine condition by analyzing vibration signatures and patterns.',
                    related: ['Vibration Monitoring', 'Condition Monitoring', 'Predictive Maintenance']
                },
                {
                    term: 'Oil Analysis',
                    definition: 'Laboratory analysis of lubricating oil to detect wear particles and system problems.',
                    related: ['Lubricant Analysis', 'Wear Detection', 'Condition Monitoring']
                },
                {
                    term: 'Electrical Signature Analysis',
                    definition: 'Technique for detecting motor and electrical system problems through electrical signature monitoring.',
                    related: ['Motor Diagnostics', 'Electrical Monitoring', 'Signature Analysis']
                },
                {
                    term: 'Partial Discharge Monitoring',
                    definition: 'Monitoring technique for detecting electrical insulation problems in high-voltage equipment.',
                    related: ['Insulation Monitoring', 'Electrical Safety', 'High-voltage Testing']
                },
                {
                    term: 'Power Quality Analysis',
                    definition: 'Measurement and analysis of electrical power characteristics to ensure optimal system performance.',
                    related: ['Power Monitoring', 'Electrical Quality', 'System Performance']
                },
                {
                    term: 'Network Analyzer',
                    definition: 'Test equipment used to analyze network communication performance and troubleshoot issues.',
                    related: ['Network Testing', 'Communication Analysis', 'Troubleshooting Tool']
                },
                {
                    term: 'Digital Oscilloscope',
                    definition: 'Electronic test instrument that displays and analyzes electrical signals over time.',
                    related: ['Signal Analysis', 'Electronic Testing', 'Waveform Display']
                },
                {
                    term: 'Logic Analyzer',
                    definition: 'Test instrument for analyzing digital circuits and debugging complex timing relationships.',
                    related: ['Digital Testing', 'Logic Debugging', 'Timing Analysis']
                },
                {
                    term: 'Digital Multimeter',
                    definition: 'Electronic measuring instrument that can measure voltage, current, and resistance.',
                    related: ['Electrical Measurement', 'Multi-function Meter', 'Basic Testing']
                },
                {
                    term: 'Current Probe',
                    definition: 'Non-contact device for measuring AC or DC current without circuit interruption.',
                    related: ['Current Measurement', 'Non-contact Testing', 'Safety Measurement']
                },
                {
                    term: 'High Voltage Probe',
                    definition: 'Specialized probe for safely measuring high voltages in industrial applications.',
                    related: ['High-voltage Measurement', 'Safety Testing', 'Voltage Probe']
                },
                {
                    term: 'Ground Resistance Tester',
                    definition: 'Instrument for measuring the resistance of grounding systems to ensure electrical safety.',
                    related: ['Grounding Verification', 'Electrical Safety', 'Resistance Measurement']
                },
                {
                    term: 'Insulation Tester',
                    definition: 'Device for measuring insulation resistance to detect insulation degradation.',
                    related: ['Insulation Testing', 'Electrical Safety', 'Resistance Measurement']
                },
                {
                    term: 'Thermal Camera',
                    definition: 'Infrared imaging device that visualizes temperature distribution for troubleshooting.',
                    related: ['Thermal Imaging', 'Temperature Visualization', 'Non-contact Measurement']
                },
                {
                    term: 'Endoscope',
                    definition: 'Flexible viewing device for inspecting hard-to-reach areas without disassembly.',
                    related: ['Visual Inspection', 'Internal Inspection', 'Remote Viewing']
                }
            ]
        },
        {
            id: 'safety',
            name: 'Safety Systems',
            description: 'Safety standards and protective systems',
            icon: 'shield',
            terms: [
                {
                    term: 'Safety PLC',
                    definition: 'Specialized PLC designed for safety-critical applications. Meets international safety standards like SIL (Safety Integrity Level) requirements.',
                    related: ['SIL', 'Functional Safety', 'Safety System']
                },
                {
                    term: 'Emergency Stop (E-Stop)',
                    definition: 'Hardware safety device that immediately stops machine operation in emergency situations. Must be a safety-rated hardwired circuit.',
                    related: ['Safety Circuit', 'Emergency Stop', 'Machine Safety']
                },
                {
                    term: 'Safety Circuit',
                    definition: 'Hardwired electrical circuit that provides safety functions independent of the main control system. Must meet safety integrity requirements.',
                    related: ['Dual-channel', 'Safety Relay', 'Safety Function']
                },
                {
                    term: 'SIL (Safety Integrity Level)',
                    definition: 'International standard (IEC 61508) for measuring safety system performance. Levels range from SIL 1 (lowest) to SIL 4 (highest).',
                    related: ['IEC 61508', 'Safety Integrity', 'Risk Reduction']
                },
                {
                    term: 'Dual-Channel Safety Circuit',
                    definition: 'Safety circuit that uses two independent channels to ensure reliable operation. Channels must have different failure modes to achieve safety goals.',
                    related: ['Safety Circuit', 'Redundancy', 'Fault Tolerance']
                },
                {
                    term: 'Safety Relay',
                    definition: 'Specialized relay designed for safety applications. Incorporates forced-guided contacts and monitoring functions.',
                    related: ['Safety Circuit', 'Forced Contact', 'Safety Monitor']
                },
                {
                    term: 'Light Curtain',
                    definition: 'Photoelectric safety device that creates an invisible barrier of light beams. Interruption of beams stops machine operation.',
                    related: ['Safety Sensor', 'Perimeter Guard', 'Photoelectric']
                },
                {
                    term: 'Safety Interlock',
                    definition: 'Mechanical or electrical device that prevents machine operation when safety conditions are not met. Examples include door switches and safety gates.',
                    related: ['Interlock', 'Safety Gate', 'Guarding']
                },
                {
                    term: 'Cat 0 Stop',
                    definition: 'Safety stop category that immediately removes power from machine actuators. Most stringent stop category, used for emergency situations.',
                    related: ['Emergency Stop', 'Stop Category', 'Power Isolation']
                },
                {
                    term: 'Cat 1 Stop',
                    definition: 'Safety stop category that removes power after a controlled stop sequence. Power is removed when movement has ceased.',
                    related: ['Controlled Stop', 'Stop Category', 'Sequence Control']
                },
                {
                    term: 'Cat 2 Stop',
                    definition: 'Safety stop category that maintains power to actuators while stopping, allowing restart when stop condition is removed.',
                    related: ['Stop Category', 'Controlled Stop', 'Restart']
                },
                {
                    term: 'Safety Mat',
                    definition: 'Pressure-sensitive floor mat that detects personnel presence and stops machine operation when stepped on.',
                    related: ['Safety Sensor', 'Presence Detection', 'Floor Safety']
                },
                {
                    term: 'Two-Hand Control',
                    definition: 'Safety device requiring simultaneous activation of two buttons to start machine operation, ensuring both hands are away from danger zones.',
                    related: ['Safety Button', 'Hand Protection', 'Machine Start']
                },
                {
                    term: 'Safety Relay Module',
                    definition: 'Specialized relay designed for safety applications, incorporating monitoring and diagnostic functions for safety circuits.',
                    related: ['Safety Circuit', 'Relay Module', 'Safety Monitoring']
                },
                {
                    term: 'Risk Assessment',
                    definition: 'Systematic process of identifying hazards and evaluating risks to determine appropriate safety measures and controls.',
                    related: ['Safety Analysis', 'Hazard Identification', 'Risk Matrix']
                },
                {
                    term: 'PL (Performance Level)',
                    definition: 'European safety standard (EN ISO 13849-1) that defines the required safety performance level for safety functions.',
                    related: ['Performance Level', 'Safety Standard', 'EN ISO 13849']
                },
                {
                    term: 'Safety Function',
                    definition: 'Specific safety-related control function that reduces risk to an acceptable level. Must be designed and verified according to standards.',
                    related: ['Safety Circuit', 'Risk Reduction', 'Protective Function']
                },
                {
                    term: 'Proving Circuit',
                    definition: 'Safety circuit that monitors the operation of protective devices and ensures they are functioning correctly before allowing operation.',
                    related: ['Safety Monitoring', 'Device Verification', 'Circuit Test']
                },
                {
                    term: 'Fault Tolerant',
                    definition: 'System design that maintains safety functions even when components fail, using redundancy and monitoring techniques.',
                    related: ['Redundancy', 'Fail-safe', 'Safety Integrity']
                },
                {
                    term: 'Reset Function',
                    definition: 'Safety circuit component that requires manual reset after a fault condition before the system can be restarted.',
                    related: ['Manual Reset', 'Fault Reset', 'Safety Reset']
                },
                {
                    term: 'Enable Circuit',
                    definition: 'Safety circuit that must be continuously activated during machine operation. Removal of enable signal stops machine.',
                    related: ['Enabling Device', 'Continuous Activation', 'Safety Control']
                },
                {
                    term: 'Bypass Function',
                    definition: 'Temporary override of safety functions for maintenance or setup purposes, requiring special authorization and procedures.',
                    related: ['Maintenance Override', 'Safety Bypass', 'Setup Mode']
                },
                {
                    term: 'Safety Interlock Switch',
                    definition: 'Mechanical switch that detects position of guards, doors, or other protective devices to ensure safety conditions.',
                    related: ['Interlock', 'Safety Switch', 'Guard Monitoring']
                },
                {
                    term: 'Safety Mat Controller',
                    definition: 'Electronic device that monitors safety mats and provides safety outputs when pressure is detected.',
                    related: ['Safety Mat', 'Pressure Sensing', 'Safety Controller']
                },
                {
                    term: 'Emergency Stop Button',
                    definition: 'Red mushroom-shaped button that provides immediate emergency stop capability when pressed.',
                    related: ['Emergency Stop', 'Safety Button', 'Emergency Control']
                },
                {
                    term: 'Safety Relay',
                    definition: 'Specialized relay with forced contacts designed for safety applications, including monitoring and diagnostic functions.',
                    related: ['Safety Circuit', 'Forced Contact', 'Safety Monitor']
                },
                {
                    term: 'Safety Light Grid',
                    definition: 'Array of photoelectric beams that create protective zone around machinery, stopping operation when interrupted.',
                    related: ['Light Curtain', 'Photoelectric Safety', 'Protective Zone']
                },
                {
                    term: 'Laser Scanner',
                    definition: 'Safety device that uses laser beams to create protective zones with configurable shape and size.',
                    related: ['Laser Safety', 'Protective Zone', 'Safety Detection']
                },
                {
                    term: 'Safety Switch',
                    definition: 'Interlock device that prevents machinery operation when safety conditions are not met.',
                    related: ['Safety Interlock', 'Guard Switch', 'Safety Control']
                },
                {
                    term: 'Pressure-sensitive Edge',
                    definition: 'Safety edge that stops machine operation when physical pressure is applied, protecting operators from crushing.',
                    related: ['Safety Edge', 'Pressure Detection', 'Operator Protection']
                },
                {
                    term: 'Safety Monitor',
                    definition: 'Electronic device that continuously monitors safety circuits and provides diagnostic information.',
                    related: ['Safety Circuit', 'Diagnostic', 'Circuit Monitoring']
                },
                {
                    term: 'Safety Controller',
                    definition: 'Programmable safety device that implements safety functions according to international safety standards.',
                    related: ['Safety PLC', 'Safety Logic', 'Functional Safety']
                },
                {
                    term: 'Safety Network',
                    definition: 'Communication network specifically designed for safety-related data exchange between safety devices.',
                    related: ['Safety Communication', 'Network Safety', 'Fail-safe Communication']
                },
                {
                    term: 'Safety Integrity',
                    definition: 'Measure of confidence that safety systems will perform required safety functions under stated conditions.',
                    related: ['SIL', 'Safety Performance', 'Reliability']
                },
                {
                    term: 'Proof Test',
                    definition: 'Periodic test performed to detect dangerous failures in safety systems and verify proper operation.',
                    related: ['Safety Test', 'Verification Test', 'Diagnostic Test']
                },
                {
                    term: 'Diagnostic Coverage',
                    definition: 'Percentage of dangerous failures that can be detected by diagnostic functions in safety systems.',
                    related: ['Diagnostic', 'Failure Detection', 'Safety Coverage']
                },
                {
                    term: 'Safety-related Control System',
                    definition: 'Control system that implements safety functions and contributes to risk reduction according to safety standards.',
                    related: ['Safety Control', 'Risk Reduction', 'Safety Function']
                },
                {
                    term: 'Electromagnetic Compatibility (EMC)',
                    definition: 'Ability of safety systems to function properly in electromagnetic environments without causing interference.',
                    related: ['EMI', 'Electromagnetic Interference', 'Noise Immunity']
                },
                {
                    term: 'Functional Safety',
                    definition: 'Safety concept that focuses on correct functioning of safety-related systems rather than hardware reliability alone.',
                    related: ['Safety Integrity', 'Correct Function', 'Risk Reduction']
                },
                {
                    term: 'As Low As Reasonably Practicable (ALARP)',
                    definition: 'Safety principle that risks should be reduced to levels that are as low as reasonably achievable.',
                    related: ['Risk Reduction', 'Safety Principle', 'Reasonableness']
                },
                {
                    term: 'Risk Matrix',
                    definition: 'Tool for evaluating and prioritizing risks based on likelihood and consequence severity.',
                    related: ['Risk Assessment', 'Risk Evaluation', 'Priority Matrix']
                },
                {
                    term: 'Hazard and Operability Study (HAZOP)',
                    definition: 'Structured method for identifying hazards and operability problems in process systems.',
                    related: ['Hazard Analysis', 'Process Safety', 'Risk Assessment']
                },
                {
                    term: 'Failure Modes and Effects Analysis (FMEA)',
                    definition: 'Systematic method for analyzing potential failure modes and their effects on system operation.',
                    related: ['Failure Analysis', 'Risk Assessment', 'Systematic Analysis']
                },
                {
                    term: 'Bow-tie Analysis',
                    definition: 'Risk assessment method that identifies threats, consequences, and barriers in a visual bow-tie format.',
                    related: ['Risk Visualization', 'Barrier Analysis', 'Risk Management']
                },
                {
                    term: 'Fault Tree Analysis (FTA)',
                    definition: 'Top-down analysis method that identifies combinations of failures that can lead to undesired events.',
                    related: ['Fault Analysis', 'Event Analysis', 'Logical Analysis']
                },
                {
                    term: 'Event Tree Analysis (ETA)',
                    definition: 'Forward analysis method that traces possible outcomes following an initiating event.',
                    related: ['Event Analysis', 'Outcome Analysis', 'Forward Analysis']
                },
                {
                    term: 'Layer of Protection Analysis (LOPA)',
                    definition: 'Method for determining the number of protection layers needed to reduce risks to acceptable levels.',
                    related: ['Protection Layers', 'Risk Reduction', 'Safety Layers']
                },
                {
                    term: 'Safety Integrity Level (SIL) Verification',
                    definition: 'Process of verifying that safety systems meet required integrity levels for specified safety functions.',
                    related: ['SIL', 'Safety Verification', 'Integrity Assessment']
                },
                {
                    term: 'Proof Test Coverage',
                    definition: 'Measure of how well proof tests can detect dangerous failures in safety systems.',
                    related: ['Proof Test', 'Failure Detection', 'Test Coverage']
                },
                {
                    term: 'Common Cause Failure',
                    definition: 'Failure of multiple components due to a single cause, affecting system redundancy.',
                    related: ['Redundancy', 'Failure Correlation', 'System Vulnerability']
                },
                {
                    term: 'Diversity',
                    definition: 'Use of different technologies or methods to achieve safety functions, reducing common cause failures.',
                    related: ['Redundancy', 'Technology Diversity', 'Common Cause Reduction']
                },
                {
                    term: 'Safety Integrity Level 3 (SIL 3)',
                    definition: 'Highest practical safety integrity level providing very high risk reduction for critical safety functions.',
                    related: ['SIL 3', 'High Safety Integrity', 'Critical Safety']
                },
                {
                    term: 'Safety Instrumented Function (SIF)',
                    definition: 'Safety function implemented using safety instruments to reduce risk to tolerable levels.',
                    related: ['Safety Function', 'Risk Reduction', 'Instrumented Safety']
                },
                {
                    term: 'Safety Instrumented System (SIS)',
                    definition: 'Implementation of one or more safety instrumented functions to maintain process safety.',
                    related: ['Instrumented Safety', 'Process Safety', 'Automated Safety']
                },
                {
                    term: 'Tolerable Risk',
                    definition: 'Risk level that is considered acceptable for a given activity or process.',
                    related: ['Acceptable Risk', 'Risk Level', 'Risk Assessment']
                },
                {
                    term: 'Unconditional Safety Function',
                    definition: 'Safety function that must always be active and cannot be bypassed or disabled.',
                    related: ['Always Active', 'Mandatory Safety', 'Non-bypassable']
                },
                {
                    term: 'Conditional Safety Function',
                    definition: 'Safety function that is active only under specific conditions or modes of operation.',
                    related: ['Mode-dependent', 'Conditional Operation', 'Context Safety']
                },
                {
                    term: 'Demand Mode',
                    definition: 'Safety function that operates only when a specific demand or condition occurs.',
                    related: ['On-demand Safety', 'Event-driven Safety', 'Reactive Safety']
                },
                {
                    term: 'Continuous Mode',
                    definition: 'Safety function that operates continuously to provide ongoing risk reduction.',
                    related: ['Continuous Safety', 'Ongoing Protection', 'Active Safety']
                },
                {
                    term: 'Proof Test Interval',
                    definition: 'Time period between proof tests for safety functions to ensure continued operation.',
                    related: ['Safety Testing', 'Test Schedule', 'Verification Interval']
                },
                {
                    term: 'Mean Time To Dangerous Failure (MTTDF)',
                    definition: 'Average time between dangerous failures in safety systems before diagnostic detection.',
                    related: ['Dangerous Failure', 'Failure Time', 'Safety Reliability']
                },
                {
                    term: 'Diagnostic Test Interval',
                    definition: 'Time period between automatic diagnostic tests in safety systems.',
                    related: ['Diagnostic Testing', 'Automated Testing', 'Health Monitoring']
                },
                {
                    term: 'Component Failure Rate',
                    definition: 'Statistical measure of how often components fail, expressed as failures per unit time.',
                    related: ['Failure Rate', 'Reliability Data', 'Statistical Analysis']
                },
                {
                    term: 'Beta Factor',
                    definition: 'Fraction of failures that are common cause failures in redundant systems.',
                    related: ['Common Cause', 'Redundancy', 'Failure Correlation']
                },
                {
                    term: 'Hardware Fault Tolerance',
                    definition: 'Number of faults that a safety system can tolerate while maintaining safe operation.',
                    related: ['Fault Tolerance', 'Safety Redundancy', 'Hardware Safety']
                },
                {
                    term: 'Safe Failure Fraction',
                    definition: 'Fraction of component failures that are safe (non-dangerous) rather than dangerous.',
                    related: ['Safe Failure', 'Failure Classification', 'Safety Analysis']
                },
                {
                    term: 'Architecture Constraints',
                    definition: 'Requirements for safety system architecture based on safety integrity level requirements.',
                    related: ['Safety Architecture', 'SIL Requirements', 'System Design']
                }
            ]
        },
        {
            id: 'advanced',
            name: 'Advanced Topics',
            description: 'Complex systems and specialized applications',
            icon: 'settings',
            terms: [
                {
                    term: 'PID Control',
                    definition: 'Proportional-Integral-Derivative control algorithm used for process control. Maintains process variables at desired setpoints.',
                    related: ['Process Control', 'Feedback Control', 'Closed Loop']
                },
                {
                    term: 'HMI (Human Machine Interface)',
                    definition: 'User interface that allows operators to interact with PLC systems. Can be touch screens, displays, or web-based interfaces.',
                    related: ['Operator Interface', 'Touch Screen', 'SCADA']
                },
                {
                    term: 'SCADA (Supervisory Control and Data Acquisition)',
                    definition: 'Computer system that monitors and controls industrial processes. Integrates multiple PLCs and provides centralized monitoring.',
                    related: ['HMI', 'Supervisory Control', 'Data Acquisition']
                },
                {
                    term: 'Motion Control',
                    definition: 'Technology that controls the movement of machinery. Includes servo drives, stepper motors, and coordinated multi-axis motion.',
                    related: ['Servo Motor', 'Stepper Motor', 'Position Control']
                },
                {
                    term: 'Servo Drive',
                    definition: 'Amplifier that controls servo motors by providing power and position feedback. Works with PLC to achieve precise motion control.',
                    related: ['Servo Motor', 'Motion Control', 'Position Feedback']
                },
                {
                    term: 'Stepper Motor',
                    definition: 'Motor that moves in discrete steps when receiving pulse commands. Used for precise positioning without feedback.',
                    related: ['Step Motor', 'Position Control', 'Pulse Command']
                },
                {
                    term: 'Variable Frequency Drive (VFD)',
                    definition: 'Electronic device that controls AC motor speed by varying input frequency and voltage. Used for energy-efficient motor control.',
                    related: ['Motor Control', 'Frequency Control', 'Energy Saving']
                },
                {
                    term: 'Batch Control',
                    definition: 'Control system that manages discrete manufacturing processes in batches. Coordinates multiple process steps and ingredients.',
                    related: ['Batch Processing', 'Recipe Management', 'Manufacturing']
                },
                {
                    term: 'Recipe Management',
                    definition: 'System for storing and managing sets of parameters that define how products are manufactured. Allows easy switching between products.',
                    related: ['Batch Control', 'Parameter Set', 'Product Configuration']
                },
                {
                    term: 'Redundancy',
                    definition: 'System design that uses backup components to ensure continued operation if primary components fail. Critical for high-availability applications.',
                    related: ['Hot Standby', 'Failover', 'High Availability']
                },
                {
                    term: 'Fuzzy Logic',
                    definition: 'Mathematical approach to handling imprecise or approximate reasoning, used in advanced control systems for complex decision making.',
                    related: ['Artificial Intelligence', 'Control Theory', 'Approximate Reasoning']
                },
                {
                    term: 'Neural Network',
                    definition: 'Computational model inspired by biological neural networks, used for pattern recognition and adaptive control in advanced automation systems.',
                    related: ['Machine Learning', 'Pattern Recognition', 'Adaptive Control']
                },
                {
                    term: 'Digital Twin',
                    definition: 'Virtual representation of a physical system that mirrors real-time conditions and can be used for simulation, optimization, and predictive maintenance.',
                    related: ['Virtual Model', 'Simulation', 'Predictive Analytics']
                },
                {
                    term: 'Edge Computing',
                    definition: 'Distributed computing paradigm that processes data near the source (edge devices) rather than in central cloud servers, reducing latency.',
                    related: ['Distributed Computing', 'Local Processing', 'IoT']
                },
                {
                    term: 'Machine Learning',
                    definition: 'Algorithms that enable systems to learn and improve from experience without explicit programming, used for predictive maintenance and optimization.',
                    related: ['Artificial Intelligence', 'Predictive Analytics', 'Pattern Recognition']
                },
                {
                    term: 'Predictive Maintenance',
                    definition: 'Maintenance strategy that uses data analysis and algorithms to predict when equipment maintenance should be performed.',
                    related: ['Condition Monitoring', 'Failure Prediction', 'Maintenance Optimization']
                },
                {
                    term: 'Cyber Security',
                    definition: 'Protection of PLC systems and networks from unauthorized access, attacks, and damage through security measures and protocols.',
                    related: ['Network Security', 'Access Control', 'Industrial Security']
                },
                {
                    term: 'Asset Management',
                    definition: 'Comprehensive approach to managing industrial assets throughout their lifecycle, including monitoring, maintenance, and optimization.',
                    related: ['Equipment Management', 'Lifecycle Management', 'Asset Optimization']
                },
                {
                    term: 'Energy Management',
                    definition: 'Systematic approach to monitoring and controlling energy consumption in industrial processes to improve efficiency and reduce costs.',
                    related: ['Energy Efficiency', 'Power Management', 'Sustainability']
                },
                {
                    term: 'Environmental Monitoring',
                    definition: 'Continuous monitoring of environmental conditions such as temperature, humidity, and air quality in industrial facilities.',
                    related: ['Climate Control', 'Environmental Safety', 'Condition Monitoring']
                },
                {
                    term: 'Quality Control',
                    definition: 'Automated systems that monitor and control product quality parameters during manufacturing processes.',
                    related: ['Statistical Process Control', 'Quality Assurance', 'Process Monitoring']
                },
                {
                    term: 'Supply Chain Integration',
                    definition: 'Integration of manufacturing systems with supply chain management for real-time coordination of production and material flow.',
                    related: ['ERP Integration', 'Material Management', 'Production Planning']
                },
                {
                    term: 'Digital Transformation',
                    definition: 'Integration of digital technology into industrial operations, fundamentally changing how businesses operate and deliver value.',
                    related: ['Industry 4.0', 'Digitalization', 'Smart Manufacturing']
                },
                {
                    term: 'Cloud Integration',
                    definition: 'Connection of industrial systems to cloud computing platforms for data storage, analytics, and remote access capabilities.',
                    related: ['Cloud Computing', 'Remote Access', 'Data Analytics']
                },
                {
                    term: 'Artificial Intelligence (AI)',
                    definition: 'Computer systems that can perform tasks requiring human intelligence, used in advanced automation and decision-making.',
                    related: ['Machine Learning', 'Expert Systems', 'Intelligent Control']
                },
                {
                    term: 'Computer Vision',
                    definition: 'Technology that enables machines to interpret and understand visual information from cameras for quality control and inspection.',
                    related: ['Image Processing', 'Visual Inspection', 'Automated Inspection']
                },
                {
                    term: 'Augmented Reality (AR)',
                    definition: 'Technology that overlays digital information onto real-world view, used for maintenance guidance and training.',
                    related: ['AR Training', 'Maintenance Guidance', 'Digital Overlay']
                },
                {
                    term: 'Virtual Reality (VR)',
                    definition: 'Immersive computer-generated environment used for training, simulation, and virtual commissioning of automation systems.',
                    related: ['VR Training', 'Simulation', 'Virtual Commissioning']
                },
                {
                    term: 'Blockchain',
                    definition: 'Distributed ledger technology used for secure, transparent recording of transactions and data in industrial applications.',
                    related: ['Distributed Ledger', 'Data Security', 'Transparency']
                },
                {
                    term: 'Internet of Things (IoT)',
                    definition: 'Network of physical devices embedded with sensors and connectivity for data collection and remote control.',
                    related: ['Connected Devices', 'Sensor Network', 'Remote Monitoring']
                },
                {
                    term: 'Big Data',
                    definition: 'Large volumes of structured and unstructured data from industrial processes, analyzed for insights and optimization.',
                    related: ['Data Analytics', 'Industrial Data', 'Process Optimization']
                },
                {
                    term: 'Data Mining',
                    definition: 'Process of discovering patterns and knowledge from large datasets using statistical and computational methods.',
                    related: ['Pattern Recognition', 'Data Analysis', 'Knowledge Discovery']
                },
                {
                    term: 'Simulation Modeling',
                    definition: 'Mathematical representation of real systems used to test scenarios and optimize performance before implementation.',
                    related: ['Process Simulation', 'System Modeling', 'Virtual Testing']
                },
                {
                    term: 'Digital Workflow',
                    definition: 'Automated sequence of digital processes that guide operators through complex procedures and tasks.',
                    related: ['Process Automation', 'Workflow Management', 'Digital Guidance']
                },
                {
                    term: 'Remote Diagnostics',
                    definition: 'Ability to diagnose and troubleshoot equipment problems remotely using communication technologies.',
                    related: ['Remote Monitoring', 'Troubleshooting', 'Distance Support']
                },
                {
                    term: 'Autonomous Systems',
                    definition: 'Self-governing systems that can operate independently with minimal human intervention using AI and automation.',
                    related: ['Self-governing', 'Independent Operation', 'AI Control']
                },
                {
                    term: 'Collaborative Robots (Cobots)',
                    definition: 'Robots designed to work safely alongside human operators in shared workspaces without safety cages.',
                    related: ['Human-Robot Collaboration', 'Safe Robotics', 'Interactive Automation']
                },
                {
                    term: 'Additive Manufacturing',
                    definition: '3D printing technology that builds parts layer by layer, increasingly integrated with industrial automation.',
                    related: ['3D Printing', 'Layer Manufacturing', 'Rapid Prototyping']
                },
                {
                    term: 'Green Manufacturing',
                    definition: 'Manufacturing approach focused on environmental sustainability, energy efficiency, and waste reduction.',
                    related: ['Sustainable Manufacturing', 'Energy Efficiency', 'Environmental Responsibility']
                },
                {
                    term: 'Circular Economy',
                    definition: 'Economic system aimed at eliminating waste through continuous reuse, refurbishment, and recycling of materials.',
                    related: ['Resource Efficiency', 'Waste Reduction', 'Sustainable Production']
                },
                {
                    term: 'Smart Sensors',
                    definition: 'Advanced sensors with built-in processing, communication, and decision-making capabilities.',
                    related: ['Intelligent Sensors', 'Sensor Technology', 'Advanced Sensing']
                },
                {
                    term: 'Digital Thread',
                    definition: 'Digital representation of a product throughout its lifecycle, connecting design, manufacturing, and service.',
                    related: ['Product Lifecycle', 'Digital Twin', 'Data Continuity']
                },
                {
                    term: 'Swarm Intelligence',
                    definition: 'Artificial intelligence approach based on collective behavior of decentralized systems, used in optimization and control.',
                    related: ['Collective Intelligence', 'Distributed AI', 'Optimization']
                },
                {
                    term: 'Reinforcement Learning',
                    definition: 'Machine learning method where agents learn optimal actions through trial and error with reward feedback.',
                    related: ['Machine Learning', 'AI Training', 'Adaptive Control']
                },
                {
                    term: 'Deep Learning',
                    definition: 'Advanced machine learning using neural networks with multiple layers for complex pattern recognition.',
                    related: ['Neural Networks', 'Pattern Recognition', 'AI Advanced']
                },
                {
                    term: 'Natural Language Processing',
                    definition: 'AI technology that enables computers to understand, interpret, and generate human language.',
                    related: ['AI', 'Language Understanding', 'Text Processing']
                },
                {
                    term: 'Computer-Aided Design (CAD)',
                    definition: 'Software tools for creating precise technical drawings and 3D models of engineering designs.',
                    related: ['Engineering Design', 'Technical Drawing', '3D Modeling']
                },
                {
                    term: 'Computer-Aided Manufacturing (CAM)',
                    definition: 'Software that uses CAD data to control manufacturing machinery and automate production processes.',
                    related: ['Manufacturing Automation', 'Production Control', 'CNC Programming']
                },
                {
                    term: 'Product Lifecycle Management (PLM)',
                    definition: 'Comprehensive approach to managing product information from conception through disposal.',
                    related: ['Product Management', 'Lifecycle Control', 'Data Integration']
                },
                {
                    term: 'Enterprise Resource Planning (ERP)',
                    definition: 'Integrated software system that manages business processes including manufacturing, finance, and supply chain.',
                    related: ['Business Integration', 'Process Management', 'Enterprise System']
                },
                {
                    term: 'Manufacturing Execution System (MES)',
                    definition: 'Software system that connects and monitors production processes in real-time.',
                    related: ['Production Control', 'Real-time Monitoring', 'Manufacturing System']
                },
                {
                    term: 'Quality Management System (QMS)',
                    definition: 'Formalized system that documents processes, procedures, and responsibilities for quality policies.',
                    related: ['Quality Control', 'Process Documentation', 'Quality Assurance']
                },
                {
                    term: 'Statistical Process Control (SPC)',
                    definition: 'Statistical method for monitoring and controlling manufacturing processes to ensure quality.',
                    related: ['Statistical Analysis', 'Process Control', 'Quality Monitoring']
                },
                {
                    term: 'Six Sigma DMAIC',
                    definition: 'Structured problem-solving methodology: Define, Measure, Analyze, Improve, Control.',
                    related: ['Problem Solving', 'Quality Improvement', 'Structured Approach']
                },
                {
                    term: 'Lean Six Sigma',
                    definition: 'Combination of Lean Manufacturing and Six Sigma methodologies for process improvement.',
                    related: ['Process Improvement', 'Waste Reduction', 'Quality Enhancement']
                },
                {
                    term: 'Value Stream Mapping',
                    definition: 'Lean tool for analyzing material and information flow required to deliver products to customers.',
                    related: ['Process Mapping', 'Value Analysis', 'Lean Tool']
                },
                {
                    term: 'Theory of Constraints (TOC)',
                    definition: 'Management paradigm that focuses on identifying and improving system constraints.',
                    related: ['Constraint Management', 'System Optimization', 'Performance Improvement']
                },
                {
                    term: 'Just-in-Time (JIT)',
                    definition: 'Inventory strategy where materials arrive exactly when needed, minimizing inventory costs.',
                    related: ['Inventory Management', 'Supply Chain', 'Efficiency']
                },
                {
                    term: 'Kanban',
                    definition: 'Visual workflow management method that controls work-in-progress and inventory levels.',
                    related: ['Workflow Control', 'Visual Management', 'Process Optimization']
                },
                {
                    term: 'Andon System',
                    definition: 'Visual management tool that alerts workers to quality or process problems using lights and signals.',
                    related: ['Visual Management', 'Problem Alert', 'Quality Control']
                },
                {
                    term: 'Poka-yoke',
                    definition: 'Error-proofing technique that prevents mistakes through design or process modifications.',
                    related: ['Error Prevention', 'Mistake Proofing', 'Quality Assurance']
                },
                {
                    term: 'Augmented Manufacturing',
                    definition: 'Integration of AR/VR technologies into manufacturing processes for enhanced productivity.',
                    related: ['AR Manufacturing', 'VR Production', 'Immersive Technology']
                },
                {
                    term: 'Cyber-Physical Systems',
                    definition: 'Systems that integrate computation, networking, and physical processes for intelligent control.',
                    related: ['CPS', 'Smart Systems', 'Integrated Computing']
                },
                {
                    term: 'Digital Manufacturing',
                    definition: 'Use of digital technologies to design, simulate, and optimize manufacturing processes.',
                    related: ['Manufacturing Simulation', 'Digital Design', 'Process Optimization']
                },
                {
                    term: 'Smart Factory',
                    definition: 'Factory that uses IoT, AI, and automation to optimize production and adapt to changes.',
                    related: ['Intelligent Manufacturing', 'Automated Production', 'Industry 4.0']
                },
                {
                    term: 'Connected Manufacturing',
                    definition: 'Manufacturing environment where machines, systems, and processes are interconnected.',
                    related: ['Manufacturing Network', 'System Integration', 'Connected Machines']
                },
                {
                    term: 'Autonomous Maintenance',
                    definition: 'Maintenance approach where operators perform basic maintenance tasks on their equipment.',
                    related: ['Operator Maintenance', 'Self-maintenance', 'Decentralized Maintenance']
                },
                {
                    term: 'Single Minute Exchange of Die (SMED)',
                    definition: 'Lean technique for reducing equipment changeover time to less than 10 minutes.',
                    related: ['Changeover Reduction', 'Lean Manufacturing', 'Setup Time']
                },
                {
                    term: 'Overall Process Effectiveness',
                    definition: 'Comprehensive metric that measures manufacturing effectiveness across multiple dimensions.',
                    related: ['Process Performance', 'Manufacturing Metrics', 'System Effectiveness']
                },
                {
                    term: 'Digital Work Instructions',
                    definition: 'Electronic procedures and guidance systems that assist operators during production.',
                    related: ['Digital Guidance', 'Electronic Procedures', 'Operator Support']
                },
                {
                    term: 'Visual Management',
                    definition: 'Management approach using visual signals and displays to communicate information quickly.',
                    related: ['Visual Communication', 'Management Display', 'Information Sharing']
                },
                {
                    term: 'Gemba Walk',
                    definition: 'Management practice of going to the actual place where work is done to observe and learn.',
                    related: ['Management Practice', 'Work Observation', 'Continuous Improvement']
                },
                {
                    term: 'Kaizen',
                    definition: 'Japanese philosophy of continuous improvement involving all employees in small incremental changes.',
                    related: ['Continuous Improvement', 'Employee Involvement', 'Incremental Change']
                },
                {
                    term: '5S Methodology',
                    definition: 'Workplace organization method: Sort, Set in Order, Shine, Standardize, Sustain.',
                    related: ['Workplace Organization', 'Lean Tool', 'Standard Work']
                },
                {
                    term: 'Mistake Proofing',
                    definition: 'Design and process modifications that prevent errors or make errors immediately obvious.',
                    related: ['Error Prevention', 'Quality Assurance', 'Process Design']
                },
                {
                    term: 'Digital Twin Simulation',
                    definition: 'Virtual model that simulates real-time operation of physical systems for optimization.',
                    related: ['Virtual Simulation', 'Real-time Modeling', 'System Optimization']
                },
                {
                    term: 'Predictive Quality',
                    definition: 'AI-driven approach that predicts quality issues before they occur in manufacturing.',
                    related: ['Quality Prediction', 'AI Manufacturing', 'Proactive Quality']
                },
                {
                    term: 'Edge Analytics',
                    definition: 'Real-time data analysis performed at the edge of the network near data sources.',
                    related: ['Edge Computing', 'Real-time Analysis', 'Distributed Analytics']
                },
                {
                    term: 'Closed-loop Quality Control',
                    definition: 'Quality control system that automatically adjusts processes based on real-time feedback.',
                    related: ['Automated Control', 'Quality Feedback', 'Process Adjustment']
                },
                {
                    term: 'Autonomous Quality Inspection',
                    definition: 'AI-powered quality inspection systems that operate without human intervention.',
                    related: ['AI Inspection', 'Automated Quality', 'Machine Vision']
                }
            ]
        }
    ]
};

// Current application state
let currentCategory = null;
let currentSearchQuery = '';

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const categoryScreen = document.getElementById('categoryScreen');
const definitionScreen = document.getElementById('definitionScreen');
const searchScreen = document.getElementById('searchScreen');

const categoryList = document.getElementById('categoryList');
const termsList = document.getElementById('termsList');
const definitionContent = document.getElementById('definitionContent');
const searchResults = document.getElementById('searchResults');

const globalSearch = document.getElementById('globalSearch');
const categorySearch = document.getElementById('categorySearch');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Global search
    globalSearch.addEventListener('input', handleGlobalSearch);
    globalSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performGlobalSearch();
        }
    });

    // Category search
    categorySearch.addEventListener('input', handleCategorySearch);
    categorySearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performCategorySearch();
        }
    });

    // Clear search results when navigating back
    document.addEventListener('click', function(e) {
        if (e.target.closest('.back-button')) {
            setTimeout(() => {
                clearSearchInputs();
            }, 100);
        }
    });
}

// Clear search inputs
function clearSearchInputs() {
    globalSearch.value = '';
    categorySearch.value = '';
    currentSearchQuery = '';
}

// Render categories on home screen
function renderCategories() {
    categoryList.innerHTML = '';
    
    plcData.categories.forEach(category => {
        const categoryCard = createCategoryCard(category);
        categoryList.appendChild(categoryCard);
    });
}

// Create category card element
function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card fade-in';
    card.onclick = () => showCategoryScreen(category.id);
    
    card.innerHTML = `
        <div class="category-icon">
            ${getCategoryIcon(category.icon)}
        </div>
        <div class="category-content">
            <h3 class="category-name">${category.name}</h3>
            <p class="category-description">${category.description}</p>
        </div>
        <div class="category-chevron">
            ${getChevronIcon()}
        </div>
    `;
    
    return card;
}

// Get category icon SVG
function getCategoryIcon(iconName) {
    const icons = {
        cpu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 9h6v6H9z"/><path d="M1 9h2"/><path d="M21 9h2"/><path d="M1 15h2"/><path d="M21 15h2"/><path d="M9 1v2"/><path d="M15 1v2"/><path d="M9 21v2"/><path d="M15 21v2"/></svg>',
        code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
        layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>',
        network: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        wrench: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>',
        settings: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'
    };
    
    return icons[iconName] || icons.cpu;
}

// Get chevron icon SVG
function getChevronIcon() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>';
}

// Navigation functions
function showHomeScreen() {
    hideAllScreens();
    homeScreen.classList.add('active');
    currentCategory = null;
    renderCategories();
}

function showCategoryScreen(categoryId = null) {
    if (categoryId) {
        currentCategory = plcData.categories.find(cat => cat.id === categoryId);
        if (currentCategory) {
            hideAllScreens();
            categoryScreen.classList.add('active');
            renderTermsList();
        }
    } else if (currentCategory) {
        hideAllScreens();
        categoryScreen.classList.add('active');
        renderTermsList();
    }
}

function showDefinitionScreen(term) {
    hideAllScreens();
    definitionScreen.classList.add('active');
    renderDefinition(term);
}

function showSearchResults() {
    hideAllScreens();
    searchScreen.classList.add('active');
}

function hideAllScreens() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
}

// Render terms list for a category
function renderTermsList(filteredTerms = null) {
    if (!currentCategory) return;
    
    const termsToShow = filteredTerms || currentCategory.terms;
    
    // Update category title
    document.getElementById('categoryTitle').textContent = currentCategory.name;
    
    termsList.innerHTML = '';
    
    if (termsToShow.length === 0) {
        termsList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">${getCategoryIcon('search')}</div>
                <h3 class="no-results-title">No terms found</h3>
                <p class="no-results-text">Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    termsToShow.forEach(term => {
        const termItem = createTermItem(term);
        termsList.appendChild(termItem);
    });
}

// Create term item element
function createTermItem(term) {
    const item = document.createElement('div');
    item.className = 'term-item fade-in';
    item.onclick = () => showDefinitionScreen(term);
    
    // Create preview (first 100 characters of definition)
    const preview = term.definition.length > 100 
        ? term.definition.substring(0, 100) + '...' 
        : term.definition;
    
    item.innerHTML = `
        <h3 class="term-name">${term.term}</h3>
        <p class="term-preview">${preview}</p>
    `;
    
    return item;
}

// Render definition screen
function renderDefinition(term) {
    document.getElementById('definitionTerm').textContent = term.term;
    
    definitionContent.innerHTML = `
        <div class="definition-text">${term.definition}</div>
        ${term.related && term.related.length > 0 ? `
            <div class="definition-section">
                <h3 class="section-title">Related Terms</h3>
                <div class="related-terms">
                    ${term.related.map(relatedTerm => 
                        `<a href="#" class="related-term" onclick="searchRelatedTerm('${relatedTerm}')">${relatedTerm}</a>`
                    ).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

// Search related term
function searchRelatedTerm(termName) {
    // Search for the term across all categories
    let foundTerm = null;
    let foundCategory = null;
    
    plcData.categories.forEach(category => {
        const term = category.terms.find(t => t.term.toLowerCase().includes(termName.toLowerCase()));
        if (term && !foundTerm) {
            foundTerm = term;
            foundCategory = category;
        }
    });
    
    if (foundTerm) {
        // Navigate to the term in its category
        currentCategory = foundCategory;
        showDefinitionScreen(foundTerm);
    }
}

// Search functions
function handleGlobalSearch() {
    const query = globalSearch.value.trim();
    currentSearchQuery = query;
    
    if (query.length >= 2) {
        // Show search suggestions in real-time
        performGlobalSearch();
    } else if (query.length === 0) {
        showHomeScreen();
    }
}

function handleCategorySearch() {
    const query = categorySearch.value.trim();
    
    if (query.length >= 2) {
        performCategorySearch();
    } else if (query.length === 0 && currentCategory) {
        renderTermsList();
    }
}

function performGlobalSearch() {
    const query = currentSearchQuery.toLowerCase();
    const results = [];
    
    plcData.categories.forEach(category => {
        category.terms.forEach(term => {
            const termMatch = term.term.toLowerCase().includes(query);
            const definitionMatch = term.definition.toLowerCase().includes(query);
            
            if (termMatch || definitionMatch) {
                results.push({
                    term: term.term,
                    definition: term.definition,
                    category: category.name,
                    categoryId: category.id,
                    match: termMatch ? 'term' : 'definition'
                });
            }
        });
    });
    
    renderSearchResults(results);
    showSearchResults();
}

function performCategorySearch() {
    if (!currentCategory) return;
    
    const query = categorySearch.value.trim().toLowerCase();
    const results = currentCategory.terms.filter(term => 
        term.term.toLowerCase().includes(query) || 
        term.definition.toLowerCase().includes(query)
    );
    
    renderTermsList(results);
}

function renderSearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">${getCategoryIcon('search')}</div>
                <h3 class="no-results-title">No results found</h3>
                <p class="no-results-text">Try different keywords or check spelling</p>
            </div>
        `;
        return;
    }
    
    results.forEach(result => {
        const resultItem = createSearchResultItem(result);
        searchResults.appendChild(resultItem);
    });
}

// Create search result item element
function createSearchResultItem(result) {
    const item = document.createElement('div');
    item.className = 'search-result-item fade-in';
    item.onclick = () => {
        // Find the category and navigate to term
        const category = plcData.categories.find(cat => cat.id === result.categoryId);
        if (category) {
            currentCategory = category;
            const term = category.terms.find(t => t.term === result.term);
            if (term) {
                showDefinitionScreen(term);
            }
        }
    };
    
    const preview = result.definition.length > 120 
        ? result.definition.substring(0, 120) + '...' 
        : result.definition;
    
    item.innerHTML = `
        <div class="search-result-category">${result.category}</div>
        <h3 class="search-result-term">${result.term}</h3>
        <p class="search-result-preview">${preview}</p>
    `;
    
    return item;
}