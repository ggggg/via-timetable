const courseMeetingSectionCombinations = (course) => {
    const lectures = course.meeting_sections.filter(section => section.sectionCode.charAt(0) === "L");
    const tutorials = course.meeting_sections.filter(section => section.sectionCode.charAt(0) === "T");
    const practicals = course.meeting_sections.filter(section => section.sectionCode.charAt(0) === "P");
    console.log(lectures)
    for (const lecture of lectures) {
        lecture.comboCode = course.courseCode + lecture.sectionCode;
    }
    for (const tutorial of tutorials) {
        tutorial.comboCode = course.courseCode + tutorial.sectionCode;
    }
    for (const practical of practicals) {
        practical.comboCode = course.courseCode + practical.sectionCode;
    }
    const lecTutCombinations = [];
    for (const lecture of lectures) {
        for (const tutorial of tutorials) {
            lecTutCombinations.push([lecture, tutorial]);
        }
        if (tutorials.length === 0) {
            lecTutCombinations.push([lecture]);
        }
    }
    let totalCombinations = [];
    for (const section of lecTutCombinations) {
        for (const practical of practicals) {
            totalCombinations.push([...section, practical]);
        }
        if (practicals.length === 0) {
            totalCombinations = lecTutCombinations;
        }
    }
    return { code: course.courseCode, combinations: totalCombinations };
};
const courseCombinations = (courseMeetingSectionCombos) => {
    const outputs = [];
    const permute = (courseMeetingSecCombos, whichArray = 0, output = []) => {
        courseMeetingSecCombos[whichArray].combinations.forEach((arrayElement) => {
            if (whichArray === courseMeetingSecCombos.length - 1) {
                // Base case...
                const temp = [...output];
                temp.push(...arrayElement);
                outputs.push(temp);
            }
            else {
                // Recursive case...
                const temp = [...output];
                temp.push(...arrayElement);
                permute(courseMeetingSecCombos, whichArray + 1, temp);
            }
        }); /*  forEach() */
    };
    permute(courseMeetingSectionCombos);
    return outputs;
};
export { courseMeetingSectionCombinations, courseCombinations };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbWJpbmF0aW9ucy9jb21iaW5hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxnQ0FBZ0MsR0FBRyxDQUFDLE1BQWMsRUFBb0MsRUFBRTtJQUMxRixNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDM0YsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUM3RixLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBQztRQUMzQixPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTtLQUM1QztJQUNELEtBQUssTUFBTSxRQUFRLElBQUksU0FBUyxFQUFDO1FBQzdCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO0tBQzlDO0lBQ0QsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUM7UUFDL0IsU0FBUyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUE7S0FDaEQ7SUFDRCxNQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUM5QixLQUFLLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRTtRQUM1QixLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDeEIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN0QztLQUNKO0lBRUQsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUE7SUFDMUIsS0FBSyxNQUFNLE9BQU8sSUFBSSxrQkFBa0IsRUFBRTtRQUN0QyxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBO1NBQ2xEO1FBQ0QsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUN4QixpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQTtTQUN6QztLQUNKO0lBQ0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxDQUFBO0FBQ2pFLENBQUMsQ0FBQTtBQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQywwQkFBOEQsRUFBc0IsRUFBRTtJQUU5RyxNQUFNLE9BQU8sR0FBdUIsRUFBRSxDQUFDO0lBRXZDLE1BQU0sT0FBTyxHQUFHLENBQUMsc0JBQTBELEVBQUUsVUFBVSxHQUFDLENBQUMsRUFBRSxTQUF5QixFQUFFLEVBQUUsRUFBRTtRQUN0SCxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFDLEVBQUU7WUFDcEUsSUFBSSxVQUFVLEtBQUssc0JBQXNCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDbEQsZUFBZTtnQkFDZixNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUE7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQTtnQkFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtpQkFDRztnQkFDQSxvQkFBb0I7Z0JBQ3BCLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQTtnQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFBO2dCQUMxQixPQUFPLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxHQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN2RDtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUEsZ0JBQWdCO0lBQ3ZCLENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUMsQ0FBQTtBQUVELE9BQU8sRUFDSCxnQ0FBZ0MsRUFDaEMsa0JBQWtCLEVBQ3JCLENBQUEifQ==